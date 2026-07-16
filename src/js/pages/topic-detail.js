import { curriculumData } from '../data.js';

function parseMarkdown(text) {
  if (!text) return '';

  const lines = text.split(/\r?\n/);
  let html = [];
  let inList = false;
  let inTable = false;
  let tableHeaders = [];
  let tableRows = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();

    // Handle Table
    if (line.startsWith('|')) {
      if (inList) {
        html.push('</ul>');
        inList = false;
      }
      
      // Check if it's separator row (like |:---| or |---|)
      if (line.match(/^\|[\s:\-\|]+$/)) {
        continue;
      }

      const cells = line.split('|').map(c => c.trim()).filter((c, idx, arr) => {
        // Keep cells except first and last empty elements from outer pipes
        return idx > 0 && idx < arr.length - 1;
      });

      if (!inTable) {
        inTable = true;
        tableHeaders = cells;
      } else {
        tableRows.push(cells);
      }
      continue;
    } else if (inTable) {
      // Table ended
      html.push(renderTableHtml(tableHeaders, tableRows));
      inTable = false;
      tableHeaders = [];
      tableRows = [];
    }

    // Handle Lists
    const listMatch = line.match(/^([•\-\*])\s+(.*)$/);
    if (listMatch) {
      if (!inList) {
        html.push('<ul style="margin: 1rem 0; padding-left: 1.5rem; list-style-type: disc;">');
        inList = true;
      }
      html.push(`<li style="margin-bottom: 0.5rem; line-height: 1.6;">${parseInlineMarkdown(listMatch[2])}</li>`);
      continue;
    } else if (inList) {
      html.push('</ul>');
      inList = false;
    }

    // Handle SVG block
    if (line.startsWith('<svg') || line.startsWith('</svg>') || (line.includes('<svg') && line.includes('</svg>')) || line.startsWith('<div class="sim-container"')) {
      html.push(line);
      continue;
    }

    // Handle Normal Paragraph
    if (line) {
      html.push(`<p style="margin-bottom: 1.25rem; line-height: 1.8; color: var(--text-normal);">${parseInlineMarkdown(line)}</p>`);
    } else {
      // Empty line
      html.push('<div style="height: 0.5rem;"></div>');
    }
  }

  // Close any open tags
  if (inList) html.push('</ul>');
  if (inTable) html.push(renderTableHtml(tableHeaders, tableRows));

  return html.join('\n');
}

function parseInlineMarkdown(text) {
  // Convert Bold (**text**)
  text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Convert Italics (*text*)
  text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
  // Convert code/formulas (\`code\`)
  text = text.replace(/`/g, '`').replace(/`(.*?)`/g, '<code style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 0.15rem 0.3rem; border-radius: var(--radius-xs); font-family: monospace; font-size: 0.9em; color: var(--accent-color);">$1</code>');
  return text;
}

function renderTableHtml(headers, rows) {
  const headHtml = headers.map(h => `<th style="padding: 0.75rem; border: 1px solid var(--border-color); background: var(--bg-secondary); font-weight: 600; text-align: left;">${parseInlineMarkdown(h)}</th>`).join('');
  const bodyHtml = rows.map(row => {
    const cells = row.map(c => `<td style="padding: 0.75rem; border: 1px solid var(--border-color);">${parseInlineMarkdown(c)}</td>`).join('');
    return `<tr>${cells}</tr>`;
  }).join('');

  return `
    <div class="table-container" style="overflow-x: auto; margin: 1.5rem 0; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
      <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
        <thead><tr style="background: var(--bg-secondary);">${headHtml}</tr></thead>
        <tbody>${bodyHtml}</tbody>
      </table>
    </div>
  `;
}


function getInlineLabHtml(type) {
  if (type === 'metal-reactivity') {
     return `
      <div class="sim-container" style="display: flex; flex-direction: column; gap: 1rem;">
        <div class="sim-viewer-pane" style="position: relative; border-radius: var(--radius-md); overflow: hidden; background: #fff; box-shadow: inset 0 2px 4px rgba(0,0,0,0.05); min-height: 340px; display: flex; justify-content: center; align-items: center;">
          <canvas id="metal-canvas" width="600" height="340" style="max-width: 100%; display: block; border-radius: 8px;"></canvas>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card" style="display: flex; gap: 1rem;">
            <div style="flex: 1;">
              <h3>Select Metal</h3>
              <select id="sel-metal-strip" style="width: 100%; padding: 0.5rem; margin-bottom: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); background: var(--bg-primary); color: var(--text-normal);">
                <option value="zn">Zinc (Zn)</option>
                <option value="fe" selected>Iron (Fe)</option>
                <option value="cu">Copper (Cu)</option>
                <option value="ag">Silver (Ag)</option>
              </select>
            </div>
            <div style="flex: 1;">
              <h3>Select Salt Solution</h3>
              <select id="sel-salt-sol" style="width: 100%; padding: 0.5rem; margin-bottom: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); background: var(--bg-primary); color: var(--text-normal);">
                <option value="znso4">Zinc Sulphate (ZnSO₄)</option>
                <option value="feso4">Iron Sulphate (FeSO₄)</option>
                <option value="cuso4" selected>Copper Sulphate (CuSO₄)</option>
                <option value="agno3">Silver Nitrate (AgNO₃)</option>
              </select>
            </div>
          </div>
          <button id="btn-drop-metal" class="nav-topic-btn next" style="width: 100%; justify-content: center; background: var(--primary-color); color: white; border: none; padding: 0.75rem; border-radius: var(--radius-sm); font-weight: 700; cursor: pointer;">Dip Metal Strip ↓</button>
        </div>
        <div class="sim-calculator">
          <h3>Observations</h3>
          <div id="metal-log-panel" style="font-size: 0.95rem; line-height: 1.6; color: var(--text-normal); background: var(--bg-primary); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
            Select a metal and a salt solution, then click "Dip Metal Strip".
          </div>
        </div>
      </div>`;
  }
  const btnText = type === 'reaction-electrolysis' ? 'Turn Power On 🔋' : 'Trigger Reaction ⚡';
  return `
    <div class="sim-container" style="display: flex; flex-direction: column; gap: 1rem;">
      <div class="sim-viewer-pane" style="position: relative; border-radius: var(--radius-md); overflow: hidden; background: #fff; box-shadow: inset 0 2px 4px rgba(0,0,0,0.05); min-height: 250px; display: flex; justify-content: center; align-items: center;">
        <canvas id="canvas-${type}" width="300" height="250" style="max-width: 100%; display: block;"></canvas>
      </div>
      <div class="sim-settings-pane">
        <button id="btn-run-${type}" class="nav-topic-btn next" style="width: 100%; justify-content: center; background: var(--primary-color); color: white; border: none; padding: 0.75rem; border-radius: var(--radius-sm); font-weight: 700; cursor: pointer; transition: background 0.2s;">${btnText}</button>
      </div>
      <div class="sim-calculator">
        <div id="obs-${type}" style="font-size: 0.95rem; line-height: 1.6; color: var(--text-normal); background: var(--bg-primary); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
          Click trigger to watch.
        </div>
      </div>
    </div>`;
}


    // ===== NEW SIMULATION HTML TEMPLATES =====
    
    const corrosionLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="corrosion-canvas" width="600" height="300"></canvas>
          <div class="canvas-instruction-bar"><span>💡 Watch iron nails corrode over time in different environments.</span></div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Environment Conditions</h3>
            <select id="sel-corrosion-env" class="sim-toggle-btn" style="text-align:left;padding:0.5rem;width:100%;margin-bottom:1rem;background:var(--bg-primary);border:1px solid var(--border-color);color:var(--text-normal);">
              <option value="air-water">Air + Water (Rusting)</option>
              <option value="oil-coated">Oil-Coated Nail (Prevention)</option>
              <option value="galvanized">Galvanized Nail (Zinc Coating)</option>
              <option value="painted">Painted Nail (Prevention)</option>
            </select>
            <button id="btn-run-corrosion" class="nav-topic-btn next" style="width:100%;justify-content:center;background:var(--primary-color);color:white;border:none;padding:0.75rem;border-radius:var(--radius-sm);font-weight:700;cursor:pointer;">Start Time-Lapse ⏩</button>
          </div>
          <div class="sim-calculator">
            <h3>Observations</h3>
            <div id="corrosion-obs" style="font-size:0.95rem;line-height:1.6;color:var(--text-normal);background:var(--bg-primary);padding:0.75rem;border-radius:var(--radius-sm);border:1px solid var(--border-color);">Select an environment and start the time-lapse.</div>
          </div>
        </div>
      </div>`;

    const photosynthesisLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="photosynthesis-canvas" width="600" height="340"></canvas>
          <div class="canvas-instruction-bar"><span>💡 Adjust light intensity to control the rate of photosynthesis.</span></div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Light Intensity</h3>
            <input type="range" id="light-intensity" min="0" max="100" value="50" style="width:100%;margin-bottom:0.5rem;">
            <div style="display:flex;justify-content:space-between;font-size:0.8rem;color:var(--text-muted);"><span>Dark</span><span>Bright</span></div>
            <button id="btn-toggle-co2" class="nav-topic-btn next" style="width:100%;justify-content:center;background:var(--primary-color);color:white;border:none;padding:0.75rem;border-radius:var(--radius-sm);font-weight:700;cursor:pointer;margin-top:0.5rem;">CO₂ Supply: ON ✅</button>
          </div>
          <div class="sim-calculator">
            <h3>Process Monitor</h3>
            <div id="photo-obs" style="font-size:0.95rem;line-height:1.6;color:var(--text-normal);background:var(--bg-primary);padding:0.75rem;border-radius:var(--radius-sm);border:1px solid var(--border-color);">Adjust light and observe O₂ bubble production.</div>
          </div>
        </div>
      </div>`;

    const heartLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="heart-canvas" width="600" height="340"></canvas>
          <div class="canvas-instruction-bar"><span>💡 Watch blood flow through the four chambers of the heart.</span></div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Heart Rate</h3>
            <input type="range" id="heart-rate" min="40" max="120" value="72" style="width:100%;margin-bottom:0.5rem;">
            <div id="heart-bpm" style="text-align:center;font-weight:700;color:var(--accent-color);">72 BPM</div>
          </div>
          <div class="sim-calculator">
            <h3>Chamber Activity</h3>
            <div id="heart-obs" style="font-size:0.95rem;line-height:1.6;color:var(--text-normal);background:var(--bg-primary);padding:0.75rem;border-radius:var(--radius-sm);border:1px solid var(--border-color);">Watch the cardiac cycle animation.</div>
          </div>
        </div>
      </div>`;

    const reflexArcLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="reflex-canvas" width="600" height="300"></canvas>
          <div class="canvas-instruction-bar"><span>💡 Click "Touch Hot Object" to trigger a reflex action.</span></div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Stimulus</h3>
            <button id="btn-reflex-trigger" class="nav-topic-btn next" style="width:100%;justify-content:center;background:#ef4444;color:white;border:none;padding:0.75rem;border-radius:var(--radius-sm);font-weight:700;cursor:pointer;">Touch Hot Object 🔥</button>
          </div>
          <div class="sim-calculator">
            <h3>Signal Path</h3>
            <div id="reflex-obs" style="font-size:0.95rem;line-height:1.6;color:var(--text-normal);background:var(--bg-primary);padding:0.75rem;border-radius:var(--radius-sm);border:1px solid var(--border-color);">Click the button to trigger a reflex arc response.</div>
          </div>
        </div>
      </div>`;

    const hormoneLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="hormone-canvas" width="600" height="300"></canvas>
          <div class="canvas-instruction-bar"><span>💡 Adjust the blood sugar slider and watch the feedback loop respond.</span></div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Blood Sugar Level</h3>
            <input type="range" id="blood-sugar" min="40" max="200" value="100" style="width:100%;margin-bottom:0.5rem;">
            <div id="sugar-val" style="text-align:center;font-weight:700;color:var(--accent-color);">100 mg/dL (Normal)</div>
          </div>
          <div class="sim-calculator">
            <h3>Hormonal Response</h3>
            <div id="hormone-obs" style="font-size:0.95rem;line-height:1.6;color:var(--text-normal);background:var(--bg-primary);padding:0.75rem;border-radius:var(--radius-sm);border:1px solid var(--border-color);">Adjust blood sugar to see insulin/glucagon feedback.</div>
          </div>
        </div>
      </div>`;

    const punnettLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="punnett-canvas" width="600" height="340"></canvas>
          <div class="canvas-instruction-bar"><span>💡 Select parent genotypes and observe the Punnett square cross.</span></div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Parent Genotypes</h3>
            <label style="font-size:0.85rem;color:var(--text-muted);">Parent 1 (♂)</label>
            <select id="sel-parent1" class="sim-toggle-btn" style="text-align:left;padding:0.5rem;width:100%;margin-bottom:0.5rem;background:var(--bg-primary);border:1px solid var(--border-color);color:var(--text-normal);">
              <option value="TT">TT (Homozygous Tall)</option>
              <option value="Tt" selected>Tt (Heterozygous Tall)</option>
              <option value="tt">tt (Homozygous Short)</option>
            </select>
            <label style="font-size:0.85rem;color:var(--text-muted);">Parent 2 (♀)</label>
            <select id="sel-parent2" class="sim-toggle-btn" style="text-align:left;padding:0.5rem;width:100%;margin-bottom:0.5rem;background:var(--bg-primary);border:1px solid var(--border-color);color:var(--text-normal);">
              <option value="TT">TT (Homozygous Tall)</option>
              <option value="Tt" selected>Tt (Heterozygous Tall)</option>
              <option value="tt">tt (Homozygous Short)</option>
            </select>
            <button id="btn-cross" class="nav-topic-btn next" style="width:100%;justify-content:center;background:var(--primary-color);color:white;border:none;padding:0.75rem;border-radius:var(--radius-sm);font-weight:700;cursor:pointer;">Perform Cross ×</button>
          </div>
          <div class="sim-calculator">
            <h3>Offspring Ratios</h3>
            <div id="punnett-obs" style="font-size:0.95rem;line-height:1.6;color:var(--text-normal);background:var(--bg-primary);padding:0.75rem;border-radius:var(--radius-sm);border:1px solid var(--border-color);">Select genotypes and click Cross.</div>
          </div>
        </div>
      </div>`;

    const prismLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="prism-canvas" width="600" height="300"></canvas>
          <div class="canvas-instruction-bar"><span>💡 Drag the light ray to adjust the angle of incidence on the prism.</span></div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Angle of Incidence</h3>
            <input type="range" id="prism-angle" min="20" max="70" value="45" style="width:100%;margin-bottom:0.5rem;">
            <div id="prism-angle-val" style="text-align:center;font-weight:700;color:var(--accent-color);">45°</div>
          </div>
          <div class="sim-calculator">
            <h3>Dispersion</h3>
            <div id="prism-obs" style="font-size:0.95rem;line-height:1.6;color:var(--text-normal);background:var(--bg-primary);padding:0.75rem;border-radius:var(--radius-sm);border:1px solid var(--border-color);">Adjust angle to see white light disperse through the prism.</div>
          </div>
        </div>
      </div>`;

    const ohmsLawLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="ohms-canvas" width="600" height="340"></canvas>
          <div class="canvas-instruction-bar"><span>💡 Adjust voltage and resistance to observe Ohm's Law: V = IR.</span></div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Circuit Parameters</h3>
            <label style="font-size:0.85rem;color:var(--text-muted);">Voltage (V)</label>
            <input type="range" id="ohms-voltage" min="0" max="12" value="6" step="0.5" style="width:100%;margin-bottom:0.25rem;">
            <div id="ohms-v-val" style="text-align:center;font-weight:700;color:var(--accent-color);margin-bottom:0.5rem;">6.0 V</div>
            <label style="font-size:0.85rem;color:var(--text-muted);">Resistance (Ω)</label>
            <input type="range" id="ohms-resistance" min="1" max="100" value="10" style="width:100%;margin-bottom:0.25rem;">
            <div id="ohms-r-val" style="text-align:center;font-weight:700;color:var(--accent-color);">10 Ω</div>
          </div>
          <div class="sim-calculator">
            <h3>Measurements</h3>
            <div id="ohms-obs" style="font-size:0.95rem;line-height:1.6;color:var(--text-normal);background:var(--bg-primary);padding:0.75rem;border-radius:var(--radius-sm);border:1px solid var(--border-color);">Adjust voltage and resistance to see current change.</div>
          </div>
        </div>
      </div>`;

    const magneticFieldLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="magnetic-canvas" width="600" height="340"></canvas>
          <div class="canvas-instruction-bar"><span>💡 Drag the compass around the magnet to see how it responds to the magnetic field.</span></div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Magnet Type</h3>
            <select id="sel-magnet-type" class="sim-toggle-btn" style="text-align:left;padding:0.5rem;width:100%;margin-bottom:1rem;background:var(--bg-primary);border:1px solid var(--border-color);color:var(--text-normal);">
              <option value="bar">Bar Magnet</option>
              <option value="horseshoe">Horseshoe Magnet</option>
            </select>
          </div>
          <div class="sim-calculator">
            <h3>Field Direction</h3>
            <div id="magnetic-obs" style="font-size:0.95rem;line-height:1.6;color:var(--text-normal);background:var(--bg-primary);padding:0.75rem;border-radius:var(--radius-sm);border:1px solid var(--border-color);">Drag the compass to explore the magnetic field pattern.</div>
          </div>
        </div>
      </div>`;

    const faradayLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="faraday-canvas" width="600" height="300"></canvas>
          <div class="canvas-instruction-bar"><span>💡 Drag the magnet in and out of the coil to induce current.</span></div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Controls</h3>
            <p style="font-size:0.9rem;color:var(--text-muted);">Click and drag the magnet left/right through the coil. Faster motion = more EMF!</p>
          </div>
          <div class="sim-calculator">
            <h3>Galvanometer</h3>
            <div id="faraday-obs" style="font-size:0.95rem;line-height:1.6;color:var(--text-normal);background:var(--bg-primary);padding:0.75rem;border-radius:var(--radius-sm);border:1px solid var(--border-color);">Move the magnet to induce an EMF.</div>
          </div>
        </div>
      </div>`;

    const foodWebLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="foodweb-canvas" width="600" height="340"></canvas>
          <div class="canvas-instruction-bar"><span>💡 Click organisms to highlight their food chain and energy flow.</span></div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Ecosystem</h3>
            <select id="sel-ecosystem" class="sim-toggle-btn" style="text-align:left;padding:0.5rem;width:100%;margin-bottom:1rem;background:var(--bg-primary);border:1px solid var(--border-color);color:var(--text-normal);">
              <option value="grassland">Grassland Ecosystem</option>
              <option value="pond">Pond Ecosystem</option>
            </select>
          </div>
          <div class="sim-calculator">
            <h3>Energy Flow</h3>
            <div id="foodweb-obs" style="font-size:0.95rem;line-height:1.6;color:var(--text-normal);background:var(--bg-primary);padding:0.75rem;border-radius:var(--radius-sm);border:1px solid var(--border-color);">Click on organisms to trace their food chain.</div>
          </div>
        </div>
      </div>`;

    const moleculeBuildLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="molecule-canvas" width="600" height="340"></canvas>
          <div class="canvas-instruction-bar"><span>💡 Select a molecule to see its electron-dot structure and bonding.</span></div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Select Molecule</h3>
            <select id="sel-molecule" class="sim-toggle-btn" style="text-align:left;padding:0.5rem;width:100%;margin-bottom:1rem;background:var(--bg-primary);border:1px solid var(--border-color);color:var(--text-normal);">
              <option value="methane">Methane (CH₄) - Single Bonds</option>
              <option value="ethene">Ethene (C₂H₄) - Double Bond</option>
              <option value="ethyne">Ethyne (C₂H₂) - Triple Bond</option>
              <option value="ethanol">Ethanol (C₂H₅OH)</option>
              <option value="ethanoic">Ethanoic Acid (CH₃COOH)</option>
            </select>
            <button id="btn-build-molecule" class="nav-topic-btn next" style="width:100%;justify-content:center;background:var(--primary-color);color:white;border:none;padding:0.75rem;border-radius:var(--radius-sm);font-weight:700;cursor:pointer;">Build Molecule 🔬</button>
          </div>
          <div class="sim-calculator">
            <h3>Structure Info</h3>
            <div id="molecule-obs" style="font-size:0.95rem;line-height:1.6;color:var(--text-normal);background:var(--bg-primary);padding:0.75rem;border-radius:var(--radius-sm);border:1px solid var(--border-color);">Select a molecule and click Build.</div>
          </div>
        </div>
      </div>`;

    const micelleLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="micelle-canvas" width="600" height="300"></canvas>
          <div class="canvas-instruction-bar"><span>💡 Add soap molecules to oil-water mixture and watch micelles form.</span></div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Controls</h3>
            <button id="btn-add-soap" class="nav-topic-btn next" style="width:100%;justify-content:center;background:var(--primary-color);color:white;border:none;padding:0.75rem;border-radius:var(--radius-sm);font-weight:700;cursor:pointer;">Add Soap 🧼</button>
          </div>
          <div class="sim-calculator">
            <h3>Cleansing Action</h3>
            <div id="micelle-obs" style="font-size:0.95rem;line-height:1.6;color:var(--text-normal);background:var(--bg-primary);padding:0.75rem;border-radius:var(--radius-sm);border:1px solid var(--border-color);">Click Add Soap to see micelle formation.</div>
          </div>
        </div>
      </div>`;

    const cellDivisionLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="celldiv-canvas" width="600" height="300"></canvas>
          <div class="canvas-instruction-bar"><span>💡 Select an organism and watch its reproduction process step-by-step.</span></div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Select Organism</h3>
            <select id="sel-organism" class="sim-toggle-btn" style="text-align:left;padding:0.5rem;width:100%;margin-bottom:1rem;background:var(--bg-primary);border:1px solid var(--border-color);color:var(--text-normal);">
              <option value="amoeba">Amoeba (Binary Fission)</option>
              <option value="yeast">Yeast (Budding)</option>
              <option value="spirogyra">Spirogyra (Fragmentation)</option>
            </select>
            <button id="btn-reproduce" class="nav-topic-btn next" style="width:100%;justify-content:center;background:var(--primary-color);color:white;border:none;padding:0.75rem;border-radius:var(--radius-sm);font-weight:700;cursor:pointer;">Start Reproduction 🔬</button>
          </div>
          <div class="sim-calculator">
            <h3>Process Log</h3>
            <div id="celldiv-obs" style="font-size:0.95rem;line-height:1.6;color:var(--text-normal);background:var(--bg-primary);padding:0.75rem;border-radius:var(--radius-sm);border:1px solid var(--border-color);">Select an organism and start.</div>
          </div>
        </div>
      </div>`;

    const menstrualCycleLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="menstrual-canvas" width="600" height="340"></canvas>
          <div class="canvas-instruction-bar"><span>💡 Drag the day slider to explore hormone levels throughout the 28-day cycle.</span></div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Cycle Day</h3>
            <input type="range" id="cycle-day" min="1" max="28" value="1" style="width:100%;margin-bottom:0.5rem;">
            <div id="cycle-day-val" style="text-align:center;font-weight:700;color:var(--accent-color);">Day 1</div>
          </div>
          <div class="sim-calculator">
            <h3>Phase Info</h3>
            <div id="menstrual-obs" style="font-size:0.95rem;line-height:1.6;color:var(--text-normal);background:var(--bg-primary);padding:0.75rem;border-radius:var(--radius-sm);border:1px solid var(--border-color);">Drag the slider to explore the menstrual cycle phases.</div>
          </div>
        </div>
      </div>`;

    const electricPowerLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="epower-canvas" width="600" height="300"></canvas>
          <div class="canvas-instruction-bar"><span>💡 Adjust voltage and current to observe heating effects and power consumption.</span></div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Circuit Parameters</h3>
            <label style="font-size:0.85rem;color:var(--text-muted);">Voltage (V)</label>
            <input type="range" id="epower-voltage" min="0" max="220" value="110" step="5" style="width:100%;margin-bottom:0.25rem;">
            <div id="epower-v-val" style="text-align:center;font-weight:700;color:var(--accent-color);margin-bottom:0.5rem;">110 V</div>
            <label style="font-size:0.85rem;color:var(--text-muted);">Current (A)</label>
            <input type="range" id="epower-current" min="0.1" max="10" value="2" step="0.1" style="width:100%;margin-bottom:0.25rem;">
            <div id="epower-i-val" style="text-align:center;font-weight:700;color:var(--accent-color);">2.0 A</div>
          </div>
          <div class="sim-calculator">
            <h3>Power Output</h3>
            <div id="epower-obs" style="font-size:0.95rem;line-height:1.6;color:var(--text-normal);background:var(--bg-primary);padding:0.75rem;border-radius:var(--radius-sm);border:1px solid var(--border-color);">Adjust voltage and current to see power and heating.</div>
          </div>
        </div>
      </div>`;

    // ===== MATH SIMULATION TEMPLATES =====
    
    const primeFactorLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="prime-canvas" width="600" height="340"></canvas>
          <div class="canvas-instruction-bar"><span>💡 Enter a number and watch its prime factor tree build step-by-step.</span></div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Enter Number</h3>
            <input type="number" id="prime-input" value="420" min="2" max="9999" style="width:100%;padding:0.5rem;margin-bottom:0.5rem;background:var(--bg-primary);border:1px solid var(--border-color);color:var(--text-normal);border-radius:var(--radius-sm);font-size:1.1rem;text-align:center;">
            <button id="btn-factorize" class="nav-topic-btn next" style="width:100%;justify-content:center;background:var(--primary-color);color:white;border:none;padding:0.75rem;border-radius:var(--radius-sm);font-weight:700;cursor:pointer;">Factorize 🔢</button>
          </div>
          <div class="sim-calculator">
            <h3>Result</h3>
            <div id="prime-obs" style="font-size:0.95rem;line-height:1.6;color:var(--text-normal);background:var(--bg-primary);padding:0.75rem;border-radius:var(--radius-sm);border:1px solid var(--border-color);">Enter a number and click Factorize.</div>
          </div>
        </div>
      </div>`;

    const polynomialLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="polynomial-canvas" width="600" height="340"></canvas>
          <div class="canvas-instruction-bar"><span>💡 Adjust coefficients a, b, c to see how the parabola y = ax² + bx + c changes.</span></div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Coefficients</h3>
            <label style="font-size:0.85rem;color:var(--text-muted);">a</label>
            <input type="range" id="poly-a" min="-5" max="5" value="1" step="0.5" style="width:100%;margin-bottom:0.25rem;">
            <div id="poly-a-val" style="text-align:center;font-size:0.85rem;color:var(--accent-color);margin-bottom:0.3rem;">a = 1</div>
            <label style="font-size:0.85rem;color:var(--text-muted);">b</label>
            <input type="range" id="poly-b" min="-10" max="10" value="0" step="0.5" style="width:100%;margin-bottom:0.25rem;">
            <div id="poly-b-val" style="text-align:center;font-size:0.85rem;color:var(--accent-color);margin-bottom:0.3rem;">b = 0</div>
            <label style="font-size:0.85rem;color:var(--text-muted);">c</label>
            <input type="range" id="poly-c" min="-10" max="10" value="-4" step="0.5" style="width:100%;margin-bottom:0.25rem;">
            <div id="poly-c-val" style="text-align:center;font-size:0.85rem;color:var(--accent-color);">c = -4</div>
          </div>
          <div class="sim-calculator">
            <h3>Zeroes</h3>
            <div id="poly-obs" style="font-size:0.95rem;line-height:1.6;color:var(--text-normal);background:var(--bg-primary);padding:0.75rem;border-radius:var(--radius-sm);border:1px solid var(--border-color);">Adjust coefficients to see zeroes change.</div>
          </div>
        </div>
      </div>`;

    const linearEqLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="lineq-canvas" width="600" height="340"></canvas>
          <div class="canvas-instruction-bar"><span>💡 Adjust coefficients of two linear equations and find their intersection point (solution).</span></div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Equation 1: a₁x + b₁y = c₁</h3>
            <div style="display:flex;gap:0.3rem;margin-bottom:0.5rem;">
              <input type="number" id="eq1-a" value="2" style="width:33%;padding:0.3rem;background:var(--bg-primary);border:1px solid var(--border-color);color:var(--text-normal);border-radius:var(--radius-xs);text-align:center;" placeholder="a₁">
              <input type="number" id="eq1-b" value="3" style="width:33%;padding:0.3rem;background:var(--bg-primary);border:1px solid var(--border-color);color:var(--text-normal);border-radius:var(--radius-xs);text-align:center;" placeholder="b₁">
              <input type="number" id="eq1-c" value="9" style="width:33%;padding:0.3rem;background:var(--bg-primary);border:1px solid var(--border-color);color:var(--text-normal);border-radius:var(--radius-xs);text-align:center;" placeholder="c₁">
            </div>
            <h3>Equation 2: a₂x + b₂y = c₂</h3>
            <div style="display:flex;gap:0.3rem;margin-bottom:0.5rem;">
              <input type="number" id="eq2-a" value="4" style="width:33%;padding:0.3rem;background:var(--bg-primary);border:1px solid var(--border-color);color:var(--text-normal);border-radius:var(--radius-xs);text-align:center;" placeholder="a₂">
              <input type="number" id="eq2-b" value="-1" style="width:33%;padding:0.3rem;background:var(--bg-primary);border:1px solid var(--border-color);color:var(--text-normal);border-radius:var(--radius-xs);text-align:center;" placeholder="b₂">
              <input type="number" id="eq2-c" value="2" style="width:33%;padding:0.3rem;background:var(--bg-primary);border:1px solid var(--border-color);color:var(--text-normal);border-radius:var(--radius-xs);text-align:center;" placeholder="c₂">
            </div>
            <button id="btn-plot-lines" class="nav-topic-btn next" style="width:100%;justify-content:center;background:var(--primary-color);color:white;border:none;padding:0.75rem;border-radius:var(--radius-sm);font-weight:700;cursor:pointer;">Plot & Solve 📊</button>
          </div>
          <div class="sim-calculator">
            <h3>Solution</h3>
            <div id="lineq-obs" style="font-size:0.95rem;line-height:1.6;color:var(--text-normal);background:var(--bg-primary);padding:0.75rem;border-radius:var(--radius-sm);border:1px solid var(--border-color);">Enter coefficients and click Plot.</div>
          </div>
        </div>
      </div>`;

    const trigLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="trig-canvas" width="600" height="340"></canvas>
          <div class="canvas-instruction-bar"><span>💡 Drag the angle on the unit circle to see sin, cos, tan values update live.</span></div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Angle (θ)</h3>
            <input type="range" id="trig-angle" min="0" max="90" value="30" style="width:100%;margin-bottom:0.5rem;">
            <div id="trig-angle-val" style="text-align:center;font-weight:700;color:var(--accent-color);">θ = 30°</div>
          </div>
          <div class="sim-calculator">
            <h3>Trigonometric Ratios</h3>
            <div id="trig-obs" style="font-size:0.95rem;line-height:1.6;color:var(--text-normal);background:var(--bg-primary);padding:0.75rem;border-radius:var(--radius-sm);border:1px solid var(--border-color);">Adjust the angle to see ratio values.</div>
          </div>
        </div>
      </div>`;

    const probabilityLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="probability-canvas" width="600" height="340"></canvas>
          <div class="canvas-instruction-bar"><span>💡 Roll dice or flip coins and watch experimental probability converge to theoretical.</span></div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Experiment</h3>
            <select id="sel-prob-type" class="sim-toggle-btn" style="text-align:left;padding:0.5rem;width:100%;margin-bottom:0.5rem;background:var(--bg-primary);border:1px solid var(--border-color);color:var(--text-normal);">
              <option value="coin">Coin Toss</option>
              <option value="dice">Dice Roll</option>
            </select>
            <button id="btn-roll" class="nav-topic-btn next" style="width:100%;justify-content:center;background:var(--primary-color);color:white;border:none;padding:0.75rem;border-radius:var(--radius-sm);font-weight:700;cursor:pointer;margin-bottom:0.5rem;">Roll / Flip ×1 🎲</button>
            <button id="btn-roll-100" class="nav-topic-btn next" style="width:100%;justify-content:center;background:var(--secondary-color);color:white;border:none;padding:0.75rem;border-radius:var(--radius-sm);font-weight:700;cursor:pointer;">Roll / Flip ×100 ⚡</button>
          </div>
          <div class="sim-calculator">
            <h3>Results</h3>
            <div id="prob-obs" style="font-size:0.95rem;line-height:1.6;color:var(--text-normal);background:var(--bg-primary);padding:0.75rem;border-radius:var(--radius-sm);border:1px solid var(--border-color);">Start rolling to collect experimental data.</div>
          </div>
        </div>
      </div>`;

    const coordinateLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="coord-canvas" width="600" height="340"></canvas>
          <div class="canvas-instruction-bar"><span>💡 Drag points A and B on the grid. Distance and section formula update live.</span></div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Points</h3>
            <div id="coord-points" style="font-size:0.95rem;color:var(--text-normal);margin-bottom:0.5rem;">A(2, 3) and B(5, 7)</div>
            <label style="font-size:0.85rem;color:var(--text-muted);">Section Ratio m:n</label>
            <input type="range" id="section-ratio" min="1" max="10" value="1" style="width:100%;margin-bottom:0.25rem;">
            <div id="section-val" style="text-align:center;font-size:0.85rem;color:var(--accent-color);">1 : 1 (Midpoint)</div>
          </div>
          <div class="sim-calculator">
            <h3>Formulas</h3>
            <div id="coord-obs" style="font-size:0.95rem;line-height:1.6;color:var(--text-normal);background:var(--bg-primary);padding:0.75rem;border-radius:var(--radius-sm);border:1px solid var(--border-color);">Drag points to see distance and section formula values.</div>
          </div>
        </div>
      </div>`;

    const apLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="ap-canvas" width="600" height="340"></canvas>
          <div class="canvas-instruction-bar"><span>💡 Adjust first term (a) and common difference (d) to visualize the AP sequence.</span></div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>AP Parameters</h3>
            <label style="font-size:0.85rem;color:var(--text-muted);">First Term (a)</label>
            <input type="range" id="ap-a" min="-10" max="20" value="2" style="width:100%;margin-bottom:0.25rem;">
            <div id="ap-a-val" style="text-align:center;font-size:0.85rem;color:var(--accent-color);margin-bottom:0.3rem;">a = 2</div>
            <label style="font-size:0.85rem;color:var(--text-muted);">Common Difference (d)</label>
            <input type="range" id="ap-d" min="-5" max="10" value="3" style="width:100%;margin-bottom:0.25rem;">
            <div id="ap-d-val" style="text-align:center;font-size:0.85rem;color:var(--accent-color);margin-bottom:0.3rem;">d = 3</div>
            <label style="font-size:0.85rem;color:var(--text-muted);">Number of Terms (n)</label>
            <input type="range" id="ap-n" min="3" max="15" value="8" style="width:100%;margin-bottom:0.25rem;">
            <div id="ap-n-val" style="text-align:center;font-size:0.85rem;color:var(--accent-color);">n = 8</div>
          </div>
          <div class="sim-calculator">
            <h3>Sequence & Sum</h3>
            <div id="ap-obs" style="font-size:0.95rem;line-height:1.6;color:var(--text-normal);background:var(--bg-primary);padding:0.75rem;border-radius:var(--radius-sm);border:1px solid var(--border-color);">Adjust parameters to see the AP.</div>
          </div>
        </div>
      </div>`;

    const tangentLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="tangent-canvas" width="600" height="340"></canvas>
          <div class="canvas-instruction-bar"><span>💡 Drag the external point to see tangent lines and verify equal tangent lengths.</span></div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Circle Properties</h3>
            <label style="font-size:0.85rem;color:var(--text-muted);">Radius</label>
            <input type="range" id="tangent-radius" min="30" max="100" value="60" style="width:100%;margin-bottom:0.5rem;">
            <div id="tangent-r-val" style="text-align:center;font-size:0.85rem;color:var(--accent-color);">r = 60</div>
          </div>
          <div class="sim-calculator">
            <h3>Tangent Properties</h3>
            <div id="tangent-obs" style="font-size:0.95rem;line-height:1.6;color:var(--text-normal);background:var(--bg-primary);padding:0.75rem;border-radius:var(--radius-sm);border:1px solid var(--border-color);">Drag the external point to explore tangent properties.</div>
          </div>
        </div>
      </div>`;

    const sectorLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="sector-canvas" width="600" height="340"></canvas>
          <div class="canvas-instruction-bar"><span>💡 Adjust the sector angle to see area of sector and segment change live.</span></div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Sector Parameters</h3>
            <label style="font-size:0.85rem;color:var(--text-muted);">Angle (θ)</label>
            <input type="range" id="sector-angle" min="10" max="350" value="90" style="width:100%;margin-bottom:0.25rem;">
            <div id="sector-angle-val" style="text-align:center;font-weight:700;color:var(--accent-color);margin-bottom:0.3rem;">θ = 90°</div>
            <label style="font-size:0.85rem;color:var(--text-muted);">Radius</label>
            <input type="range" id="sector-radius" min="30" max="120" value="80" style="width:100%;margin-bottom:0.25rem;">
            <div id="sector-r-val" style="text-align:center;font-size:0.85rem;color:var(--accent-color);">r = 80</div>
          </div>
          <div class="sim-calculator">
            <h3>Areas</h3>
            <div id="sector-obs" style="font-size:0.95rem;line-height:1.6;color:var(--text-normal);background:var(--bg-primary);padding:0.75rem;border-radius:var(--radius-sm);border:1px solid var(--border-color);">Adjust angle to see sector and segment areas.</div>
          </div>
        </div>
      </div>`;

    const statsLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="stats-canvas" width="600" height="340"></canvas>
          <div class="canvas-instruction-bar"><span>💡 Select a preset dataset or enter your own to see Mean, Mode, and Median on the histogram.</span></div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Dataset</h3>
            <select id="sel-stats-data" class="sim-toggle-btn" style="text-align:left;padding:0.5rem;width:100%;margin-bottom:0.5rem;background:var(--bg-primary);border:1px solid var(--border-color);color:var(--text-normal);">
              <option value="marks">Student Marks Distribution</option>
              <option value="income">Family Income Distribution</option>
              <option value="height">Heights of Students</option>
            </select>
            <button id="btn-plot-stats" class="nav-topic-btn next" style="width:100%;justify-content:center;background:var(--primary-color);color:white;border:none;padding:0.75rem;border-radius:var(--radius-sm);font-weight:700;cursor:pointer;">Plot Histogram 📊</button>
          </div>
          <div class="sim-calculator">
            <h3>Central Tendencies</h3>
            <div id="stats-obs" style="font-size:0.95rem;line-height:1.6;color:var(--text-normal);background:var(--bg-primary);padding:0.75rem;border-radius:var(--radius-sm);border:1px solid var(--border-color);">Select a dataset and click Plot.</div>
          </div>
        </div>
      </div>`;

    const heightDistLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="heightdist-canvas" width="600" height="340"></canvas>
          <div class="canvas-instruction-bar"><span>💡 Adjust the observer position and angle of elevation to calculate the height.</span></div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Parameters</h3>
            <label style="font-size:0.85rem;color:var(--text-muted);">Distance from base (m)</label>
            <input type="range" id="hd-dist" min="10" max="100" value="50" style="width:100%;margin-bottom:0.25rem;">
            <div id="hd-dist-val" style="text-align:center;font-size:0.85rem;color:var(--accent-color);margin-bottom:0.3rem;">d = 50 m</div>
            <label style="font-size:0.85rem;color:var(--text-muted);">Angle of Elevation (°)</label>
            <input type="range" id="hd-angle" min="10" max="80" value="30" style="width:100%;margin-bottom:0.25rem;">
            <div id="hd-angle-val" style="text-align:center;font-size:0.85rem;color:var(--accent-color);">θ = 30°</div>
          </div>
          <div class="sim-calculator">
            <h3>Calculation</h3>
            <div id="hd-obs" style="font-size:0.95rem;line-height:1.6;color:var(--text-normal);background:var(--bg-primary);padding:0.75rem;border-radius:var(--radius-sm);border:1px solid var(--border-color);">Adjust parameters to calculate the height.</div>
          </div>
        </div>
      </div>`;


export function renderTopicDetail(classId, subjectId, topicId) {  const classObj = curriculumData.classes[classId];
  if (!classObj) {
    return `<div class="page-container"><h1>Class not found</h1><p><a href="#/classes">Back to classes</a></p></div>`;
  }

  // Resolve subject
  let subjectObj;
  let subjectName = '';
  if (classObj.isHighSchool) {
    const parts = subjectId.split('_');
    const streamKey = parts[0];
    const realSubjectKey = parts.slice(1).join('_');
    const stream = classObj.streams[streamKey];
    if (stream) {
      subjectObj = stream.subjects[realSubjectKey];
      subjectName = `${subjectObj?.name || ''} (${stream.name})`;
    }
  } else {
    subjectObj = classObj.subjects[subjectId];
    subjectName = subjectObj?.name || '';
  }

  if (!subjectObj) {
    return `<div class="page-container"><h1>Subject not found</h1><p><a href="#/class/${classId}">Back to subjects</a></p></div>`;
  }

  // Locate the topic and chapter
  let chapterObj = null;
  let topicObj = null;

  for (const ch of subjectObj.chapters || []) {
    const foundTopic = ch.topics.find(t => t.id === topicId);
    if (foundTopic) {
      chapterObj = ch;
      topicObj = foundTopic;
      break;
    }
  }
  if (!topicObj) {
    return `<div class="page-container"><h1>Topic not found</h1><p><a href="#/class/${classId}/subject/${subjectId}">Back to subject chapters</a></p></div>`;
  }

  // Local state references for current session (resets on load)
  let activeTab = 'slides'; // default to slides for teaching
  let currentSlide = 0;

  // Quiz Game State references
  let quizGameActive = false;
  let quizGameType = null; // 'chapter' or 'class'
  let quizNumTeams = 2;
  let quizTeamScores = [];
  let quizCurrentQuestionIdx = 0;
  let quizQuestions = [];
  let quizUserAnswers = []; // tracks correct/incorrect for each question
  let isTieBreaker = false;
  let unusedPoolQuestions = [];
  let quizSelectedTotalCount = 5;
  let quizQuestionOrder = 'random';
  let speechUtterance = null;
  let isSpeaking = false;

  setTimeout(() => {
    const tabContainer = document.getElementById('viewer-body-container');
    const tabButtons = document.querySelectorAll('.nav-tab-btn');
    const viewerTitleIcon = document.getElementById('viewer-title-icon');
    const viewerTitleText = document.getElementById('viewer-title-text');
    
    function switchTab(tabName) {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      isSpeaking = false;
      updateVoiceButton();

      activeTab = tabName;
      // Update sidebar active classes
      tabButtons.forEach(btn => {
        if (btn.getAttribute('data-tab') === tabName) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
      
      // Update viewer header
      if (tabName === 'lesson') {
        viewerTitleIcon.textContent = '📖';
        viewerTitleText.textContent = 'Interactive Lesson & Visual Lab';
        renderLessonContent();
      } else if (tabName === 'quiz') {
        viewerTitleIcon.textContent = '📝';
        viewerTitleText.textContent = 'Board Practice Quiz';
        renderQuizContent();
      }
    }

    const chemistryBalancerLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="balancer-canvas" width="600" height="340"></canvas>
          <div class="canvas-instruction-bar" style="display: flex; justify-content: space-between; align-items: center;">
            <span>💡 Adjust the stoichiometric coefficients using + / - to balance the chemical equation.</span>
            <span id="balancer-status-badge" class="live-badge" style="background: #ef4444; color: white; padding: 0.25rem 0.5rem; border-radius: var(--radius-sm); font-size: 0.75rem; font-weight: 700;">UNBALANCED</span>
          </div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Choose Chemical Equation</h3>
            <select id="sel-balancer-eq" class="sim-toggle-btn" style="text-align: left; padding: 0.5rem; width:100%; margin-bottom: 1rem; background: var(--bg-primary); border: 1px solid var(--border-color); color: var(--text-normal);">
              <option value="water">Synthesis of Water (H₂ + O₂ → H₂O)</option>
              <option value="haber">Haber Process (N₂ + H₂ → NH₃)</option>
              <option value="rust">Rusting of Iron (Fe + H₂O → Fe₃O₄ + H₂)</option>
            </select>
            
            <h3>Adjust Coefficients</h3>
            <div id="balancer-controls-container" style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 0.5rem;">
              <!-- Dynamically populated based on equation -->
            </div>
          </div>
          <div class="sim-calculator">
            <h3>Balance Countboard</h3>
            <div class="calc-step-list" id="balancer-table" style="font-family: monospace; font-size: 0.95rem; line-height: 1.5; color: var(--text-normal); background: var(--bg-primary); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
              <!-- Atom counts Reactants vs Products -->
            </div>
          </div>
        </div>
      </div>
    `;

    const chemistryReactionsLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="reactions-canvas" width="600" height="340"></canvas>
          <div class="canvas-instruction-bar">
            <span>💡 Select a reaction type and click "Run Reaction" to witness molecular and physical changes.</span>
          </div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Select Chemical Reaction</h3>
            <select id="sel-reaction-type" class="sim-toggle-btn" style="text-align: left; padding: 0.5rem; width:100%; margin-bottom: 1rem; background: var(--bg-primary); border: 1px solid var(--border-color); color: var(--text-normal);">
              <option value="slaking">Slaking of Lime (CaO + H₂O) — Combination</option>
              <option value="electrolysis">Electrolysis of Water (H₂O) — Decomposition</option>
              <option value="lead-nitrate">Heating Lead Nitrate [Pb(NO₃)₂] — Thermal Decomposition</option>
              <option value="iron-copper">Iron in Copper Sulphate (Fe + CuSO₄) — Displacement</option>
              <option value="barium-sodium">Barium Chloride + Sodium Sulphate — Double Displacement</option>
              <option value="copper-oxidation">Heating Copper Powder (Cu + O₂) — Oxidation/Reduction</option>
              <option value="feso4-thermal">Heating Ferrous Sulphate (FeSO₄) — Thermal Decomposition</option>
              <option value="agcl-photo">Silver Chloride in Sunlight (AgCl) — Photochemical Decomposition</option>
              <option value="redox-cuo">CuO + Hydrogen Gas — Redox Reaction</option>
              <option value="mg-combustion">Burning Magnesium Ribbon — Combination (Exothermic)</option>
            </select>
            <button id="btn-run-reaction" class="nav-topic-btn next" style="width: 100%; justify-content: center; background: var(--primary-color); color: white; border: none; padding: 0.75rem; border-radius: var(--radius-sm); font-weight: 700; cursor: pointer; transition: background 0.2s;">Run Reaction ⚡</button>
          </div>
          <div class="sim-calculator">
            <h3>Reaction Observations</h3>
            <div id="reaction-obs-panel" style="font-size: 0.95rem; line-height: 1.6; color: var(--text-normal); background: var(--bg-primary); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
              Select a reaction and click trigger to watch.
            </div>
          </div>
        </div>
      </div>
    `;

    const phScaleLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="ph-canvas" width="600" height="340"></canvas>
          <div class="canvas-instruction-bar">
            <span>💡 Click and drag the indicator test paper into the beaker, or toggle solutions.</span>
          </div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Test Solution Beaker</h3>
            <select id="sel-ph-substance" class="sim-toggle-btn" style="text-align: left; padding: 0.5rem; width:100%; margin-bottom: 1rem; background: var(--bg-primary); border: 1px solid var(--border-color); color: var(--text-normal);">
              <option value="hcl">1M Hydrochloric Acid (Strong Acid)</option>
              <option value="gastric">Gastric Juice (Acidic)</option>
              <option value="lemon">Lemon Juice (Acidic)</option>
              <option value="tomato">Tomato Juice (Weak Acid)</option>
              <option value="water" selected>Pure Water / Saliva (Neutral)</option>
              <option value="magnesia">Milk of Magnesia (Weak Base)</option>
              <option value="naoh">1M Sodium Hydroxide (Strong Base)</option>
            </select>
            
            <h3>Indicator Probe</h3>
            <div style="display: flex; flex-direction: column; gap: 0.6rem; color: var(--text-normal);">
              <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;"><input type="radio" name="ph-probe" value="universal" checked> Universal pH Paper</label>
              <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;"><input type="radio" name="ph-probe" value="litmus-blue"> Blue Litmus Paper</label>
              <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;"><input type="radio" name="ph-probe" value="litmus-red"> Red Litmus Paper</label>
              <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;"><input type="radio" name="ph-probe" value="phenolphthalein"> Phenolphthalein Drops</label>
            </div>
          </div>
          <div class="sim-calculator">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
              <h3 style="margin-bottom:0; color: var(--secondary-color); font-size: 1.1rem;">Analytical pH Log</h3>
              <button id="btn-export-ph" class="btn-export-csv" title="Save this experiment data to CSV">📥 Save Report</button>
            </div>
            <div id="ph-log-panel" style="font-size: 0.95rem; line-height: 1.6; color: var(--text-normal); background: var(--bg-primary); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
              Select universal paper to see chemical metrics.
            </div>
          </div>
        </div>
      </div>
    `;

    const metalReactivityLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="metal-canvas" width="600" height="340"></canvas>
          <div class="canvas-instruction-bar">
            <span>💡 Select a metal strip and a solution beaker to test displacement reactivity.</span>
          </div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Displacement Test Setup</h3>
            <div class="control-item">
              <label style="display: block; margin-bottom: 0.25rem; font-weight: 600;">Select Metal Strip:</label>
              <select id="sel-metal-strip" class="sim-toggle-btn" style="text-align: left; padding: 0.5rem; width:100%; background: var(--bg-primary); border: 1px solid var(--border-color); color: var(--text-normal);">
                <option value="fe" selected>Iron Strip (Fe)</option>
                <option value="cu">Copper Strip (Cu)</option>
                <option value="zn">Zinc Strip (Zn)</option>
                <option value="ag">Silver Strip (Ag)</option>
              </select>
            </div>
            <div class="control-item" style="margin-top: 1rem;">
              <label style="display: block; margin-bottom: 0.25rem; font-weight: 600;">Select Salt Solution:</label>
              <select id="sel-salt-sol" class="sim-toggle-btn" style="text-align: left; padding: 0.5rem; width:100%; background: var(--bg-primary); border: 1px solid var(--border-color); color: var(--text-normal);">
                <option value="cuso4" selected>Copper Sulphate (CuSO₄) — Blue</option>
                <option value="feso4">Iron Sulphate (FeSO₄) — Pale Green</option>
                <option value="znso4">Zinc Sulphate (ZnSO₄) — Colorless</option>
                <option value="agno3">Silver Nitrate (AgNO₃) — Colorless</option>
              </select>
            </div>
            <button id="btn-drop-metal" class="nav-topic-btn next" style="width: 100%; justify-content: center; background: var(--secondary-color); color: white; border: none; padding: 0.75rem; border-radius: var(--radius-sm); font-weight: 700; cursor: pointer; margin-top: 1rem;">Dip Metal in Solution 🧪</button>
          <div class="sim-calculator">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
              <h3 style="margin-bottom:0; color: var(--secondary-color); font-size: 1.1rem;">Displacement Board Log</h3>
              <button id="btn-export-metal" class="btn-export-csv" title="Save reactivity experiment data to CSV">📥 Save Report</button>
            </div>
            <div id="metal-log-panel" style="font-size: 0.95rem; line-height: 1.6; color: var(--text-normal); background: var(--bg-primary); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
              Dip a metal into a solution to observe reactivity.
            </div>
          </div>
        </div>
      </div>
    `;

    const neutralizationTitrationLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="neutralization-canvas" width="600" height="340"></canvas>
          <div class="canvas-instruction-bar" style="display: flex; justify-content: space-between; align-items: center;">
            <span>💡 Dilution Safety: Click 'Add Acid' or 'Add Water' to observe the exothermic reaction.</span>
            <span id="neutralization-danger-badge" class="live-badge" style="background: var(--bg-primary); color: var(--text-normal); padding: 0.25rem 0.5rem; border-radius: var(--radius-sm); font-size: 0.75rem; font-weight: 700; border: 1px solid var(--border-color);">SAFE</span>
          </div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Dilution Procedure</h3>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1rem;">
              Always add acid slowly to water with continuous stirring.
            </p>
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              <button id="btn-add-acid" class="nav-topic-btn next" style="width: 100%; justify-content: center; background: #3b82f6; color: white; border: none; padding: 0.75rem; border-radius: var(--radius-sm); font-weight: 700; cursor: pointer;">Add Acid to Water 💧 (Safe)</button>
              <button id="btn-add-water" class="nav-topic-btn next" style="width: 100%; justify-content: center; background: #ef4444; color: white; border: none; padding: 0.75rem; border-radius: var(--radius-sm); font-weight: 700; cursor: pointer;">Add Water to Acid ⚠️ (Danger)</button>
              <button id="btn-reset-neutralization" class="sim-toggle-btn" style="width: 100%; justify-content: center; margin-top: 0.5rem;">Reset Beakers</button>
            </div>
          </div>
          <div class="sim-calculator">
            <h3 style="margin-bottom:0; color: var(--secondary-color); font-size: 1.1rem; padding-bottom: 0.5rem;">Reaction Log</h3>
            <div id="neutralization-log-panel" style="font-size: 0.95rem; line-height: 1.6; color: var(--text-normal); background: var(--bg-primary); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
              Waiting to start dilution...
            </div>
          </div>
        </div>
      </div>
    `;

    const conductivityCircuitLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="conductivity-canvas" width="600" height="340"></canvas>
          <div class="canvas-instruction-bar" style="display: flex; justify-content: space-between; align-items: center;">
            <span>💡 Select a material to place between the crocodile clips to test conductivity.</span>
            <span id="conductivity-status-badge" class="live-badge" style="background: var(--bg-primary); color: var(--text-normal); padding: 0.25rem 0.5rem; border-radius: var(--radius-sm); font-size: 0.75rem; font-weight: 700; border: 1px solid var(--border-color);">CIRCUIT OPEN</span>
          </div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Test Material Selector</h3>
            <div class="control-item">
              <label style="display: block; margin-bottom: 0.25rem; font-weight: 600;">Insert Material:</label>
              <select id="sel-circuit-material" class="sim-toggle-btn" style="text-align: left; padding: 0.5rem; width:100%; background: var(--bg-primary); border: 1px solid var(--border-color); color: var(--text-normal);">
                <option value="none" selected>-- Empty (Open Circuit) --</option>
                <option value="iron">Iron Nail (Metal)</option>
                <option value="copper">Copper Wire (Metal)</option>
                <option value="coal">Coal / Carbon (Non-Metal)</option>
                <option value="sulphur">Sulphur Powder (Non-Metal)</option>
                <option value="graphite">Graphite Pencil Lead (Non-Metal Exception)</option>
              </select>
            </div>
            <button id="btn-test-conductivity" class="nav-topic-btn next" style="width: 100%; justify-content: center; background: #eab308; color: #1c1917; border: none; padding: 0.75rem; border-radius: var(--radius-sm); font-weight: 800; cursor: pointer; margin-top: 1rem;">Test Conductivity ⚡</button>
          </div>
          <div class="sim-calculator">
            <h3 style="margin-bottom:0; color: var(--secondary-color); font-size: 1.1rem; padding-bottom: 0.5rem;">Conductivity Result</h3>
            <div id="conductivity-log-panel" style="font-size: 0.95rem; line-height: 1.6; color: var(--text-normal); background: var(--bg-primary); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
              Select a material and test the circuit.
            </div>
          </div>
        </div>
      </div>
    `;

    const refractionLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="refraction-canvas" width="600" height="340"></canvas>
          <div class="canvas-instruction-bar">
            <span>💡 Drag the laser pointer on the canvas or use the angle slider to see bending.</span>
            <span class="live-badge tir-alert" id="tir-badge" style="display:none;">⚠️ TOTAL INTERNAL REFLECTION</span>
          </div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Simulation Controls</h3>
            <div class="control-item">
              <div class="control-label-row">
                <span>Medium 1 (Top):</span>
                <span id="lbl-n1" class="control-val-badge">n₁ = 1.0</span>
              </div>
              <select id="sel-n1" class="sim-toggle-btn" style="text-align: left; padding: 0.5rem; width:100%;">
                <option value="1.0" selected>Air (n = 1.0)</option>
                <option value="1.33">Water (n = 1.33)</option>
                <option value="1.5">Glass (n = 1.5)</option>
                <option value="2.42">Diamond (n = 2.42)</option>
              </select>
            </div>
            <div class="control-item">
              <div class="control-label-row">
                <span>Medium 2 (Bottom):</span>
                <span id="lbl-n2" class="control-val-badge">n₂ = 1.5</span>
              </div>
              <select id="sel-n2" class="sim-toggle-btn" style="text-align: left; padding: 0.5rem; width:100%;">
                <option value="1.0">Air (n = 1.0)</option>
                <option value="1.33">Water (n = 1.33)</option>
                <option value="1.5" selected>Glass (n = 1.5)</option>
                <option value="2.42">Diamond (n = 2.42)</option>
              </select>
            </div>
            <div class="control-item">
              <div class="control-label-row">
                <span>Incident Angle (θ₁):</span>
                <span id="lbl-theta1" class="control-val-badge">45°</span>
              </div>
              <input type="range" id="rng-theta1" min="0" max="89" value="45" class="sim-range-input">
            </div>
          </div>
          <div class="sim-calculator">
            <h3>Live Conceptual Solver</h3>
            <div class="calc-step-list" id="refraction-solver-steps">
              <!-- Calculated live -->
            </div>
          </div>
        </div>
      </div>
    `;

    const planeMirrorLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="plane-mirror-canvas" width="600" height="340"></canvas>
          <div class="canvas-instruction-bar">
            <span>💡 Drag the laser pointer on the left, or toggle between Smooth Mirror and Rough Surface.</span>
          </div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Plane Mirror Controls</h3>
            <div class="sim-btn-row" style="margin-bottom: 1.25rem;">
              <button class="sim-toggle-btn active" id="btn-plane-smooth">Smooth (Regular)</button>
              <button class="sim-toggle-btn" id="btn-plane-rough">Rough (Diffuse)</button>
            </div>
            <div class="control-item">
              <div class="control-label-row">
                <span>Incident Angle (θi):</span>
                <span id="lbl-plane-theta1" class="control-val-badge">45°</span>
              </div>
              <input type="range" id="rng-plane-theta1" min="0" max="80" value="45" class="sim-range-input">
            </div>
          </div>
          <div class="sim-calculator">
            <h3>Reflection Laws Solver</h3>
            <div class="calc-step-list" id="plane-mirror-solver-steps">
              <!-- Rendered live -->
            </div>
          </div>
        </div>
      </div>
    `;

    const mirrorLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="mirror-canvas" width="600" height="340"></canvas>
          <div class="canvas-instruction-bar">
            <span>💡 Drag the green object (arrow) or use the sliders to analyze.</span>
            <span id="mirror-badge-holder"></span>
          </div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Mirror Configurations</h3>
            <div class="sim-btn-row" style="margin-bottom: 1.25rem;">
              <button class="sim-toggle-btn active" id="btn-mirror-concave">Concave Mirror</button>
              <button class="sim-toggle-btn" id="btn-mirror-convex">Convex Mirror</button>
            </div>
            <div class="control-item">
              <div class="control-label-row">
                <span>Object Distance (u):</span>
                <span id="lbl-mirror-u" class="control-val-badge">-150 cm</span>
              </div>
              <input type="range" id="rng-mirror-u" min="-300" max="-20" value="-150" class="sim-range-input">
            </div>
            <div class="control-item">
              <div class="control-label-row">
                <span>Focal Length (f):</span>
                <span id="lbl-mirror-f" class="control-val-badge">100 cm</span>
              </div>
              <input type="range" id="rng-mirror-f" min="50" max="150" value="100" class="sim-range-input">
            </div>
            <div class="control-item">
              <div class="control-label-row">
                <span>Object Height (hₒ):</span>
                <span id="lbl-mirror-ho" class="control-val-badge">40 cm</span>
              </div>
              <input type="range" id="rng-mirror-ho" min="10" max="80" value="40" class="sim-range-input">
            </div>
          </div>
          <div class="sim-calculator">
            <h3>Mirror Formula Solver</h3>
            <div class="calc-step-list" id="mirror-solver-steps">
              <!-- Rendered dynamically -->
            </div>
          </div>
        </div>
      </div>
    `;

    const lensLabHtml = `
      <div class="visual-lab-container">
        <div class="sim-canvas-wrapper">
          <canvas id="lens-canvas" width="600" height="340"></canvas>
          <div class="canvas-instruction-bar">
            <span>💡 Drag the green object (arrow) or use the sliders to analyze.</span>
            <span id="lens-badge-holder"></span>
          </div>
        </div>
        <div class="sim-settings-pane">
          <div class="settings-group-card">
            <h3>Lens Configurations</h3>
            <div class="sim-btn-row" style="margin-bottom: 1.25rem;">
              <button class="sim-toggle-btn active" id="btn-lens-convex">Convex Lens</button>
              <button class="sim-toggle-btn" id="btn-lens-concave">Concave Lens</button>
            </div>
            <div class="control-item">
              <div class="control-label-row">
                <span>Object Distance (u):</span>
                <span id="lbl-lens-u" class="control-val-badge">-150 cm</span>
              </div>
              <input type="range" id="rng-lens-u" min="-300" max="-20" value="-150" class="sim-range-input">
            </div>
            <div class="control-item">
              <div class="control-label-row">
                <span>Focal Length (f):</span>
                <span id="lbl-lens-f" class="control-val-badge">100 cm</span>
              </div>
              <input type="range" id="rng-lens-f" min="50" max="150" value="100" class="sim-range-input">
            </div>
            <div class="control-item">
              <div class="control-label-row">
                <span>Object Height (hₒ):</span>
                <span id="lbl-lens-ho" class="control-val-badge">40 cm</span>
              </div>
              <input type="range" id="rng-lens-ho" min="10" max="80" value="40" class="sim-range-input">
            </div>
          </div>
          <div class="sim-calculator">
            <h3>Lens Formula Solver</h3>
            <div class="calc-step-list" id="lens-solver-steps">
              <!-- Rendered dynamically -->
            </div>
          </div>
        </div>
      </div>
    `;

    function renderLessonContent() {
      // Resolve prev and next topics for sub-lecture navigation
      const topicList = chapterObj.topics || [];
      const topicIndex = topicList.findIndex(t => t.id === topicObj.id);
      const prevTopic = topicIndex > 0 ? topicList[topicIndex - 1] : null;
      const nextTopic = topicIndex < topicList.length - 1 ? topicList[topicIndex + 1] : null;

      // Removed Slides Feature as requested

      // 2. Narrative Textbook & Deep Concepts (100% NCERT + 900% added details)
      let theoryHtml = '';
      if (topicObj.theory) {
        let sectionsHtml = '';
        topicObj.theory.sections.forEach((sec, idx) => {
          sectionsHtml += `
            <div class="theory-section-card" style="margin-bottom: 2rem; padding: 1.5rem; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
              <h3 class="theory-section-heading" style="font-size: 1.4rem; color: var(--secondary-color); margin-bottom: 1rem; border-left: 4px solid var(--secondary-color); padding-left: 0.75rem;">${sec.heading}</h3>
              <div style="font-size: 1.05rem; line-height: 1.8; color: var(--text-normal);">${parseMarkdown(sec.text)}</div>
            </div>
          `;

          if (sec.inlineLab) {
            sectionsHtml += `
              <div class="theory-section-card visual-lab-section" style="margin-bottom: 2rem; padding: 1.5rem; border: 1px solid var(--accent-color); background: rgba(var(--accent-rgb), 0.03); border-radius: var(--radius-md); box-shadow: var(--card-shadow);">
                <h3 class="theory-section-heading" style="font-size: 1.4rem; color: var(--accent-color); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                  <span>🔮</span> ${sec.inlineLab.title || 'Interactive Simulation'}
                </h3>
                <p style="margin-bottom: 1.5rem; color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">
                  Interact with this live simulation to visualize the concept described above!
                </p>
                ${getInlineLabHtml(sec.inlineLab.type)}
              </div>
            `;
          }
          
          // Insert the visual lab after the second section (or if there is only 1 section, after that)
          const insertIndex = Math.min(1, topicObj.theory.sections.length - 1);
          if (idx === insertIndex && topicObj.lab) {
            let labHtml = '';
            let labDesc = 'Interact with this live simulation to visualize the concepts in real-time.';
            
            if (topicObj.lab.type === 'plane-mirror') {
              labHtml = planeMirrorLabHtml;
              labDesc = 'Interact with this live ray diagram simulation. Drag the laser pointer or adjust the angle to observe the laws of reflection in real-time!';
            } else if (topicObj.lab.type === 'refraction') {
              labHtml = refractionLabHtml;
              labDesc = 'Interact with this live ray diagram simulation. Drag the laser pointer or change the medium to observe how light bends and formulas update live!';
            } else if (topicObj.lab.type === 'mirror') {
              labHtml = mirrorLabHtml;
              labDesc = 'Interact with this live ray diagram simulation. Drag the object arrow to observe how image paths and the mirror formula update live!';
            } else if (topicObj.lab.type === 'lens') {
              labHtml = lensLabHtml;
              labDesc = 'Interact with this live ray diagram simulation. Drag the object arrow to observe how image paths and the lens formula update live!';
            } else if (topicObj.lab.type === 'chemistry-balancer') {
              labHtml = chemistryBalancerLabHtml;
              labDesc = 'Interact with this live balancing simulation. Adjust the stoichiometric coefficients to balance the equation and watch the scales update in real-time!';
            } else if (topicObj.lab.type.startsWith('chemistry-reactions')) {
              labHtml = chemistryReactionsLabHtml.replace('id="sel-reaction-type"', `id="sel-reaction-type" data-mode="${topicObj.lab.type}"`);
              labDesc = 'Interact with this live chemical reaction simulation. Trigger the reaction to observe molecular and physical changes step-by-step!';
            } else if (topicObj.lab.type === 'ph-litmus') {
              labHtml = phScaleLabHtml;
              labDesc = 'Interact with this live pH lab. Dip different indicator papers into various solutions to determine their acidic or basic nature!';
            } else if (topicObj.lab.type === 'metal-reactivity') {
              labHtml = metalReactivityLabHtml;
              labDesc = 'Interact with this live reactivity lab. Dip metal strips into salt solutions to observe single-displacement reactions and verify the reactivity series!';
            } else if (topicObj.lab.type === 'neutralization-titration') {
              labHtml = neutralizationTitrationLabHtml;
              labDesc = 'Interact with this live dilution lab. Observe the exothermic nature of mixing acid with water and the consequences of incorrect procedures.';
            } else if (topicObj.lab.type === 'conductivity-circuit') {
              labHtml = conductivityCircuitLabHtml;
              labDesc = 'Interact with this live electrical circuit lab. Test various metals and non-metals to determine their electrical conductivity.';
            } else if (topicObj.lab.type === 'corrosion') {
              labHtml = corrosionLabHtml;
              labDesc = 'Watch iron nails corrode in different environments and learn about corrosion prevention methods.';
            } else if (topicObj.lab.type === 'photosynthesis') {
              labHtml = photosynthesisLabHtml;
              labDesc = 'Control light intensity and CO\u2082 supply to observe how photosynthesis rate changes in real-time.';
            } else if (topicObj.lab.type === 'heart-circulation') {
              labHtml = heartLabHtml;
              labDesc = 'Watch blood flow through the four chambers of the heart and understand the cardiac cycle.';
            } else if (topicObj.lab.type === 'reflex-arc') {
              labHtml = reflexArcLabHtml;
              labDesc = 'Trigger a reflex action and watch the nerve signal travel from receptor to effector.';
            } else if (topicObj.lab.type === 'hormone-feedback') {
              labHtml = hormoneLabHtml;
              labDesc = 'Adjust blood sugar levels and observe the insulin-glucagon feedback mechanism.';
            } else if (topicObj.lab.type === 'punnett-square') {
              labHtml = punnettLabHtml;
              labDesc = 'Select parent genotypes and generate Punnett squares to predict offspring ratios.';
            } else if (topicObj.lab.type === 'prism-dispersion') {
              labHtml = prismLabHtml;
              labDesc = 'Observe white light dispersing into the visible spectrum through a glass prism.';
            } else if (topicObj.lab.type === 'ohms-law') {
              labHtml = ohmsLawLabHtml;
              labDesc = 'Build a circuit and adjust voltage/resistance to verify Ohm\u2019s Law: V = IR.';
            } else if (topicObj.lab.type === 'electric-power') {
              labHtml = electricPowerLabHtml;
              labDesc = 'Observe heating effects and calculate electric power P = VI in a live circuit.';
            } else if (topicObj.lab.type === 'magnetic-field') {
              labHtml = magneticFieldLabHtml;
              labDesc = 'Drag a compass around a magnet and observe magnetic field line patterns.';
            } else if (topicObj.lab.type === 'faraday-induction') {
              labHtml = faradayLabHtml;
              labDesc = 'Move a magnet through a coil and observe electromagnetic induction in action.';
            } else if (topicObj.lab.type === 'food-web') {
              labHtml = foodWebLabHtml;
              labDesc = 'Click organisms to trace food chains and observe the 10% energy transfer rule.';
            } else if (topicObj.lab.type === 'molecule-builder') {
              labHtml = moleculeBuildLabHtml;
              labDesc = 'Select organic molecules and see their electron-dot structures and covalent bonds.';
            } else if (topicObj.lab.type === 'micelle') {
              labHtml = micelleLabHtml;
              labDesc = 'Add soap to an oil-water mixture and watch micelle formation step-by-step.';
            } else if (topicObj.lab.type === 'cell-division') {
              labHtml = cellDivisionLabHtml;
              labDesc = 'Watch binary fission, budding, and fragmentation in different organisms.';
            } else if (topicObj.lab.type === 'menstrual-cycle') {
              labHtml = menstrualCycleLabHtml;
              labDesc = 'Explore the 28-day menstrual cycle with hormone level graphs and phase information.';
            } else if (topicObj.lab.type === 'prime-factor') {
              labHtml = primeFactorLabHtml;
              labDesc = 'Enter any number and watch its prime factor tree build step-by-step.';
            } else if (topicObj.lab.type === 'polynomial-graph') {
              labHtml = polynomialLabHtml;
              labDesc = 'Adjust coefficients to plot parabolas and find zeroes of quadratic polynomials.';
            } else if (topicObj.lab.type === 'linear-equations') {
              labHtml = linearEqLabHtml;
              labDesc = 'Plot two linear equations and find their intersection point graphically.';
            } else if (topicObj.lab.type === 'trig-ratios') {
              labHtml = trigLabHtml;
              labDesc = 'Drag the angle on a unit circle to see sin, cos, and tan values update live.';
            } else if (topicObj.lab.type === 'probability-sim') {
              labHtml = probabilityLabHtml;
              labDesc = 'Roll dice and flip coins to see experimental probability converge to theoretical values.';
            } else if (topicObj.lab.type === 'coordinate-geo') {
              labHtml = coordinateLabHtml;
              labDesc = 'Drag points on a grid to explore distance and section formula in coordinate geometry.';
            } else if (topicObj.lab.type === 'ap-visualizer') {
              labHtml = apLabHtml;
              labDesc = 'Visualize arithmetic progressions as bar charts and compute nth term and sum formulas.';
            } else if (topicObj.lab.type === 'tangent-circle') {
              labHtml = tangentLabHtml;
              labDesc = 'Drag an external point and observe tangent lines drawn to a circle with equal lengths.';
            } else if (topicObj.lab.type === 'sector-segment') {
              labHtml = sectorLabHtml;
              labDesc = 'Adjust the sector angle to see areas of sector and segment compute live.';
            } else if (topicObj.lab.type === 'statistics-histogram') {
              labHtml = statsLabHtml;
              labDesc = 'Plot histograms from grouped data and see Mean, Mode, Median lines overlaid.';
            } else if (topicObj.lab.type === 'heights-distances') {
              labHtml = heightDistLabHtml;
              labDesc = 'Adjust observer position and angle to calculate heights using trigonometry.';
            }
            
            sectionsHtml += `
              <div class="theory-section-card visual-lab-section" style="margin-bottom: 2rem; padding: 1.5rem; border: 1px solid var(--accent-color); background: rgba(var(--accent-rgb), 0.03); border-radius: var(--radius-md); box-shadow: var(--card-shadow);">
                <h3 class="theory-section-heading" style="font-size: 1.4rem; color: var(--accent-color); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                  <span>🔮</span> Feynman-Einstein Interactive Lab
                </h3>
                <p style="margin-bottom: 1.5rem; color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">
                  ${labDesc}
                </p>
                ${labHtml}
              </div>
            `;
          }
        });
        
        theoryHtml = `
          <div class="theory-panel">
            <div class="concept-hook-card" style="padding: 1.5rem; border-left: 4px solid var(--accent-color); background: var(--accent-glow); border-radius: 0 var(--radius-md) var(--radius-md) 0; margin-bottom: 2rem; font-style: italic;">
              <p class="theory-intro" style="font-size: 1.15rem; line-height: 1.8; color: var(--text-normal); margin: 0;">
                "${topicObj.theory.intro}"
              </p>
            </div>
            ${sectionsHtml}
          </div>
        `;
      }

      // 3. Classroom Science Activity
      let activityHtml = '';
      const activities = topicObj.activities || (topicObj.activity ? [topicObj.activity] : []);
      if (activities.length > 0) {
        let stepsHtml = '';
        activities[0].steps.forEach((step, idx) => {
          stepsHtml += `
            <div class="activity-step" style="display: flex; gap: 1rem; align-items: start; margin-bottom: 0.75rem;">
              <div class="step-num" style="background-color: var(--primary-color); color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; justify-content: center; align-items: center; flex-shrink: 0; font-size: 0.85rem; font-weight: 700;">${idx + 1}</div>
              <div class="step-desc" style="font-size: 1.05rem; line-height: 1.5; padding-top: 2px;">${step}</div>
            </div>
          `;
        });
        activityHtml = `
          <div class="activity-card" style="margin-top: 2rem; padding: 1.5rem; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
            <span class="activity-badge" style="background-color: var(--secondary-glow); color: var(--secondary-color); padding: 0.25rem 0.75rem; border-radius: var(--radius-sm); font-size: 0.75rem; font-weight: 700; border: 1px solid var(--secondary-color); text-transform: uppercase; letter-spacing: 0.5px;">🔬 Practical Activity / Experiment</span>
            <h2 style="font-size: 1.6rem; margin-top: 0.5rem; margin-bottom: 1.25rem;">${activities[0].title}</h2>
            <div class="activity-materials" style="margin-bottom: 1.5rem;">
              <h4 style="font-size: 1.15rem; color: var(--secondary-color); margin-bottom: 0.5rem;"><span style="margin-right: 0.5rem;">📦</span>Materials Required:</h4>
              <ul style="padding-left: 1.25rem; font-size: 1.05rem; line-height: 1.6;">
                ${activities[0].materials.map(mat => '<li>' + mat + '</li>').join('')}
              </ul>
            </div>
            <div style="margin-bottom: 1.5rem;">
              <h4 style="font-size: 1.15rem; color: var(--secondary-color); margin-bottom: 0.75rem;"><span style="margin-right: 0.5rem;">🪜</span>Step-by-Step Procedure:</h4>
              <div>
                ${stepsHtml}
              </div>
            </div>
            <div class="observation-box" style="background-color: var(--accent-glow); border-left: 4px solid var(--accent-color); padding: 1.25rem; border-radius: 0 var(--radius-sm) var(--radius-sm) 0; margin-top: 1.5rem;">
              <h4 style="color: var(--accent-color); margin-bottom: 0.25rem; font-size: 1.1rem; display: flex; align-items: center; gap: 0.5rem;">
                <span>💡</span> Expected Scientific Observation:
              </h4>
              <p style="font-weight: 500; font-size: 1.05rem; line-height: 1.6; color: var(--text-normal); margin: 0;">${activities[0].observation}</p>
            </div>
          </div>
        `;
      }

      // Create Prev / Next sub-lecture buttons html
      let topicNavHtml = '';
      if (prevTopic || nextTopic || true) { // Always show nav bar even if 1 topic
        let nextBtnHtml = '';
        if (nextTopic) {
          nextBtnHtml = `
            <a href="#/class/${classId}/subject/${subjectId}/topic/${nextTopic.id}" class="nav-topic-btn next" style="align-items: flex-end; text-align: right;">
              <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">Next Lecture →</span>
              <span style="font-size: 1.05rem; color: var(--secondary-color); font-weight: 600;">${nextTopic.title}</span>
            </a>
          `;
        } else {
          const chapterIndex = subjectObj.chapters.findIndex(ch => ch.id === chapterObj.id);
          const nextChapter = (chapterIndex !== -1 && chapterIndex < subjectObj.chapters.length - 1) ? subjectObj.chapters[chapterIndex + 1] : null;
          
          if (nextChapter && nextChapter.topics && nextChapter.topics.length > 0) {
            const nextChapFirstTopic = nextChapter.topics[0];
            nextBtnHtml = `
              <a href="#/class/${classId}/subject/${subjectId}/topic/${nextChapFirstTopic.id}" class="nav-topic-btn next" style="align-items: flex-end; text-align: right; background: rgba(var(--secondary-rgb), 0.1);">
                <span style="font-size: 0.85rem; color: var(--secondary-color); font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">Next Chapter →</span>
                <span style="font-size: 1.05rem; color: var(--secondary-color); font-weight: 600;">${nextChapter.title}</span>
              </a>
            `;
          } else {
            nextBtnHtml = `
              <div class="nav-topic-btn disabled" style="opacity: 0.4; align-items: flex-end; text-align: right;">
                <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">Last Lecture →</span>
                <span style="font-size: 1.05rem; color: var(--text-muted); font-weight: 600;">End of Chapter</span>
              </div>
            `;
          }
        }

        topicNavHtml = `
          <div class="topic-navigation-bar">
            <div>
              ${prevTopic ? `
                <a href="#/class/${classId}/subject/${subjectId}/topic/${prevTopic.id}" class="nav-topic-btn prev">
                  <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">← Previous Lecture</span>
                  <span style="font-size: 1.05rem; color: var(--secondary-color); font-weight: 600;">${prevTopic.title}</span>
                </a>
              ` : `
                <div class="nav-topic-btn disabled" style="opacity: 0.4;">
                  <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">← First Lecture</span>
                  <span style="font-size: 1.05rem; color: var(--text-muted); font-weight: 600;">Beginning of Chapter</span>
                </div>
              `}
            </div>
            <div>
              ${nextBtnHtml}
            </div>
          </div>
        `;
      }

      // Render all sections in single layout
      tabContainer.innerHTML = `
        <div class="lesson-flow-wrapper" style="display: flex; flex-direction: column; gap: 2rem;">
          ${theoryHtml}
          ${activityHtml}
          ${topicNavHtml}
        </div>
      `;

      // Initialize the simulation canvas
      if (topicObj.lab) {
        if (topicObj.lab.type === 'plane-mirror') {
          initPlaneMirrorLab();
        } else if (topicObj.lab.type === 'refraction') {
          initRefractionLab();
        } else if (topicObj.lab.type === 'mirror') {
          initMirrorLab();
        } else if (topicObj.lab.type === 'lens') {
          initLensLab();
        } else if (topicObj.lab.type === 'chemistry-balancer') {
          initBalancingLab();
        } else if (topicObj.lab.type.startsWith('chemistry-reactions')) {
          initReactionsLab();
        } else if (topicObj.lab.type === 'ph-litmus') {
          initPhScaleLab();
        } else if (topicObj.lab.type === 'neutralization-titration') {
          initNeutralizationTitrationLab();
        } else if (topicObj.lab.type === 'conductivity-circuit') {
          initConductivityCircuitLab();
        } else if (topicObj.lab.type === 'corrosion') {
          initCorrosionLab();
        } else if (topicObj.lab.type === 'photosynthesis') {
          initPhotosynthesisLab();
        } else if (topicObj.lab.type === 'heart-circulation') {
          initHeartLab();
        } else if (topicObj.lab.type === 'reflex-arc') {
          initReflexArcLab();
        } else if (topicObj.lab.type === 'hormone-feedback') {
          initHormoneLab();
        } else if (topicObj.lab.type === 'punnett-square') {
          initPunnettLab();
        } else if (topicObj.lab.type === 'prism-dispersion') {
          initPrismLab();
        } else if (topicObj.lab.type === 'ohms-law') {
          initOhmsLawLab();
        } else if (topicObj.lab.type === 'electric-power') {
          initElectricPowerLab();
        } else if (topicObj.lab.type === 'magnetic-field') {
          initMagneticFieldLab();
        } else if (topicObj.lab.type === 'faraday-induction') {
          initFaradayLab();
        } else if (topicObj.lab.type === 'food-web') {
          initFoodWebLab();
        } else if (topicObj.lab.type === 'molecule-builder') {
          initMoleculeBuilderLab();
        } else if (topicObj.lab.type === 'micelle') {
          initMicelleLab();
        } else if (topicObj.lab.type === 'cell-division') {
          initCellDivisionLab();
        } else if (topicObj.lab.type === 'menstrual-cycle') {
          initMenstrualCycleLab();
        } else if (topicObj.lab.type === 'prime-factor') {
          initPrimeFactorLab();
        } else if (topicObj.lab.type === 'polynomial-graph') {
          initPolynomialLab();
        } else if (topicObj.lab.type === 'linear-equations') {
          initLinearEqLab();
        } else if (topicObj.lab.type === 'trig-ratios') {
          initTrigLab();
        } else if (topicObj.lab.type === 'probability-sim') {
          initProbabilityLab();
        } else if (topicObj.lab.type === 'coordinate-geo') {
          initCoordinateLab();
        } else if (topicObj.lab.type === 'ap-visualizer') {
          initAPLab();
        } else if (topicObj.lab.type === 'tangent-circle') {
          initTangentLab();
        } else if (topicObj.lab.type === 'sector-segment') {
          initSectorLab();
        } else if (topicObj.lab.type === 'statistics-histogram') {
          initStatsLab();
        } else if (topicObj.lab.type === 'heights-distances') {
          initHeightsDistancesLab();
        }
      }
      
      if (typeof initInlineLabs === 'function') initInlineLabs();
    }

    function renderQuizContent() {
      const getChapterQuestionPool = () => {
        const pool = [];
        (chapterObj.topics || []).forEach(t => {
          if (t.quiz) {
            t.quiz.forEach(q => {
              pool.push({
                ...q,
                topicTitle: t.title
              });
            });
          }
        });
        return pool;
      };

      const shuffleArray = (arr) => {
        const newArr = [...arr];
        for (let i = newArr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }
        return newArr;
      };

      const getQuestionDifficulty = (q) => {
        if (q.difficulty) return q.difficulty;
        const text = (q.question + ' ' + (q.explanation || '')).toLowerCase();
        
        // Hard keywords
        if (text.includes('1/f') || text.includes('lens formula') || text.includes('mirror formula') || text.includes('power of combination') || text.includes('magnification') || text.includes('dioptre') || text.includes('cm') || text.includes('calculation') || text.includes('combining')) {
          return 'hard';
        }
        
        // Medium keywords
        if (text.includes('refractive index') || text.includes('snell') || text.includes('normal') || text.includes('focus') || text.includes('displacement') || text.includes('balanced') || text.includes('anode') || text.includes('cathode')) {
          return 'medium';
        }
        
        return 'easy';
      };

      const shuffleQuestionOptions = (q) => {
        const originalOptions = q.options;
        const originalAnswerIdx = q.answer;
        
        // Create pairs of [optionText, originalIdx]
        const pairs = originalOptions.map((opt, idx) => ({ text: opt, idx }));
        
        // Shuffle the pairs
        for (let i = pairs.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
        }
        
        const newOptions = pairs.map(p => p.text);
        const newAnswerIdx = pairs.findIndex(p => p.idx === originalAnswerIdx);
        
        return {
          ...q,
          options: newOptions,
          answer: newAnswerIdx
        };
      };

      const getTeamColor = (idx) => {
        const colors = [
          { bg: '#e0e7ff', text: '#3730a3', border: '#818cf8', rgb: '129, 140, 248' }, // Indigo
          { bg: '#fef3c7', text: '#92400e', border: '#fbbf24', rgb: '251, 191, 36' },  // Amber
          { bg: '#d1fae5', text: '#065f46', border: '#34d399', rgb: '52, 211, 153' },  // Emerald
          { bg: '#fee2e2', text: '#991b1b', border: '#f87171', rgb: '248, 113, 113' },  // Rose
          { bg: '#e0f2fe', text: '#075985', border: '#38bdf8', rgb: '56, 189, 248' },  // Sky
          { bg: '#f3e8ff', text: '#6b21a8', border: '#c084fc', rgb: '192, 132, 252' },  // Purple
          { bg: '#ffedd5', text: '#9a3412', border: '#fb923c', rgb: '251, 146, 60' },   // Orange
          { bg: '#fae8ff', text: '#86198f', border: '#e879f9', rgb: '232, 121, 249' },  // Fuchsia
          { bg: '#e0f7fa', text: '#006064', border: '#26c6da', rgb: '38, 198, 218' },   // Cyan
          { bg: '#f0f4c3', text: '#33691e', border: '#d4e157', rgb: '212, 225, 87' }    // Lime
        ];
        return colors[idx % colors.length];
      };

      // 1. SETUP SCREEN
      if (!quizGameActive) {
        tabContainer.innerHTML = `
          <div class="quiz-lobby-card" style="padding: 2.5rem; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-lg); box-shadow: var(--card-shadow); max-width: 800px; margin: 1.5rem auto;">
            <div style="text-align: center; margin-bottom: 2rem;">
              <span style="font-size: 3.5rem;">🏆</span>
              <h2 style="font-size: 2.2rem; margin-top: 0.5rem; margin-bottom: 0.5rem; color: var(--primary-color);">Vidyasetu Classroom Quiz Hub</h2>
              <p style="color: var(--text-muted); font-size: 1.1rem; line-height: 1.6;">
                Choose a mode to evaluate learning outcomes. Practice solo or launch an exciting classroom team battle!
              </p>
            </div>

            <!-- Mode Tabs -->
            <div class="lobby-modes-tabs" style="display: flex; gap: 1rem; margin-bottom: 2rem;">
              <button id="lobby-tab-chapter" class="nav-topic-btn" style="flex: 1; text-align: center; justify-content: center; height: unset; padding: 1.25rem; flex-direction: column; cursor: pointer; border-color: ${quizGameType === 'chapter' || !quizGameType ? 'var(--primary-color)' : 'var(--border-color)'}; background: ${quizGameType === 'chapter' || !quizGameType ? 'var(--primary-glow)' : 'transparent'}">
                <span style="font-size: 1.8rem; margin-bottom: 0.25rem;">📖</span>
                <span style="font-size: 1.2rem; font-weight: 700; color: var(--text-normal);">Chapter Practice (Solo)</span>
                <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 500; margin-top: 0.25rem;">Shuffled chapter questions</span>
              </button>
              <button id="lobby-tab-class" class="nav-topic-btn" style="flex: 1; text-align: center; justify-content: center; height: unset; padding: 1.25rem; flex-direction: column; cursor: pointer; border-color: ${quizGameType === 'class' ? 'var(--primary-color)' : 'var(--border-color)'}; background: ${quizGameType === 'class' ? 'var(--primary-glow)' : 'transparent'}">
                <span style="font-size: 1.8rem; margin-bottom: 0.25rem;">👥</span>
                <span style="font-size: 1.2rem; font-weight: 700; color: var(--text-normal);">Classroom Battle (Teams)</span>
                <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 500; margin-top: 0.25rem;">Scoreboard, sudden death ties</span>
              </button>
            </div>

            <!-- Mode Config Panel -->
            <div id="lobby-config-panel" style="padding: 1.5rem; background: var(--bg-primary); border: 1px solid var(--border-color); border-radius: var(--radius-md); margin-bottom: 2rem;">
              <!-- Dynamic config will be injected -->
            </div>

            <button id="start-quiz-btn" class="nav-topic-btn next" style="width: 100%; display: flex; justify-content: center; align-items: center; padding: 1.25rem; font-size: 1.25rem; font-weight: 700; background: var(--primary-color); color: white; border: none; border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s;">
              Start Quiz Game! 🚀
            </button>
          </div>
        `;



        const updateLobbyConfig = (type) => {
          quizGameType = type;
          const panel = document.getElementById('lobby-config-panel');
          const tabChapter = document.getElementById('lobby-tab-chapter');
          const tabClass = document.getElementById('lobby-tab-class');

          if (type === 'chapter') {
            tabChapter.style.borderColor = 'var(--primary-color)';
            tabChapter.style.background = 'var(--primary-glow)';
            tabClass.style.borderColor = 'var(--border-color)';
            tabClass.style.background = 'transparent';

            panel.innerHTML = `
              <h3 style="margin-top: 0; font-size: 1.2rem; margin-bottom: 1rem; color: var(--primary-color);">Solo Practice Settings</h3>
              <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.25rem; line-height: 1.5;">
                Test your knowledge with randomized questions spanning the entire chapter **"${chapterObj.title}"**. Excellent for self-evaluation.
              </p>
              <div>
                <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; color: var(--text-normal);">Select Number of Questions:</label>
                <div style="display: flex; gap: 0.5rem;">
                  ${[5, 10, 'All'].map(cnt => {
                    const active = quizSelectedTotalCount === cnt || (cnt === 'All' && quizSelectedTotalCount === 999);
                    return `
                      <button class="config-count-btn nav-topic-btn" data-count="${cnt}" style="flex: 1; justify-content: center; text-align: center; border-color: ${active ? 'var(--secondary-color)' : 'var(--border-color)'}; background: ${active ? 'var(--secondary-glow)' : 'transparent'}">${cnt}</button>
                    `;
                  }).join('')}
                </div>
              </div>
              <div style="margin-top: 1.25rem;">
                <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; color: var(--text-normal);">Question Progression:</label>
                <div style="display: flex; gap: 0.5rem;">
                  <button class="config-order-btn nav-topic-btn" data-order="random" style="flex: 1; justify-content: center; text-align: center; border-color: ${quizQuestionOrder === 'random' ? 'var(--secondary-color)' : 'var(--border-color)'}; background: ${quizQuestionOrder === 'random' ? 'var(--secondary-glow)' : 'transparent'}">Shuffle Mix 🔀</button>
                  <button class="config-order-btn nav-topic-btn" data-order="progressive" style="flex: 1; justify-content: center; text-align: center; border-color: ${quizQuestionOrder === 'progressive' ? 'var(--secondary-color)' : 'var(--border-color)'}; background: ${quizQuestionOrder === 'progressive' ? 'var(--secondary-glow)' : 'transparent'}">Easy to Hard 📈</button>
                </div>
              </div>
            `;
          } else {
            tabClass.style.borderColor = 'var(--primary-color)';
            tabClass.style.background = 'var(--primary-glow)';
            tabChapter.style.borderColor = 'var(--border-color)';
            tabChapter.style.background = 'transparent';

            panel.innerHTML = `
              <h3 style="margin-top: 0; font-size: 1.2rem; margin-bottom: 1rem; color: var(--primary-color);">Classroom Team Battle Settings</h3>
              <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.25rem; line-height: 1.5;">
                Divide students into teams (1 to 10) and display questions on the blackboard. Award points as teams call out answers. Tie-breaker questions are generated automatically in case of equal scores!
              </p>
              <div style="margin-bottom: 1.5rem;">
                <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; color: var(--text-normal);">Number of Teams (1 to 10):</label>
                <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.5rem; flex-wrap: wrap;">
                  ${Array.from({ length: 10 }, (_, idx) => {
                    const num = idx + 1;
                    const active = quizNumTeams === num;
                    return `
                      <button class="config-team-btn nav-topic-btn" data-teams="${num}" style="justify-content: center; text-align: center; border-color: ${active ? 'var(--secondary-color)' : 'var(--border-color)'}; background: ${active ? 'var(--secondary-glow)' : 'transparent'}">${num} Team${num > 1 ? 's' : ''}</button>
                    `;
                  }).join('')}
                </div>
              </div>
              <div>
                <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; color: var(--text-normal);">Select Game Length (Questions):</label>
                <div style="display: flex; gap: 0.5rem;">
                  ${[5, 10, 15].map(cnt => {
                    const active = quizSelectedTotalCount === cnt;
                    return `
                      <button class="config-count-btn nav-topic-btn" data-count="${cnt}" style="flex: 1; justify-content: center; text-align: center; border-color: ${active ? 'var(--secondary-color)' : 'var(--border-color)'}; background: ${active ? 'var(--secondary-glow)' : 'transparent'}">${cnt} Questions</button>
                    `;
                  }).join('')}
                </div>
              </div>
              <div style="margin-top: 1.25rem;">
                <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; color: var(--text-normal);">Question Progression:</label>
                <div style="display: flex; gap: 0.5rem;">
                  <button class="config-order-btn nav-topic-btn" data-order="random" style="flex: 1; justify-content: center; text-align: center; border-color: ${quizQuestionOrder === 'random' ? 'var(--secondary-color)' : 'var(--border-color)'}; background: ${quizQuestionOrder === 'random' ? 'var(--secondary-glow)' : 'transparent'}">Shuffle Mix 🔀</button>
                  <button class="config-order-btn nav-topic-btn" data-order="progressive" style="flex: 1; justify-content: center; text-align: center; border-color: ${quizQuestionOrder === 'progressive' ? 'var(--secondary-color)' : 'var(--border-color)'}; background: ${quizQuestionOrder === 'progressive' ? 'var(--secondary-glow)' : 'transparent'}">Easy to Hard 📈</button>
                </div>
              </div>
            `;
          }

          panel.querySelectorAll('.config-count-btn').forEach(btn => {
            btn.addEventListener('click', () => {
              const val = btn.getAttribute('data-count');
              quizSelectedTotalCount = val === 'All' ? 999 : parseInt(val);
              updateLobbyConfig(quizGameType);
            });
          });

          panel.querySelectorAll('.config-team-btn').forEach(btn => {
            btn.addEventListener('click', () => {
              quizNumTeams = parseInt(btn.getAttribute('data-teams'));
              updateLobbyConfig(quizGameType);
            });
          });

          panel.querySelectorAll('.config-order-btn').forEach(btn => {
            btn.addEventListener('click', () => {
              quizQuestionOrder = btn.getAttribute('data-order');
              updateLobbyConfig(quizGameType);
            });
          });
        };

        if (!quizGameType) quizGameType = 'chapter';
        updateLobbyConfig(quizGameType);

        document.getElementById('lobby-tab-chapter').addEventListener('click', () => updateLobbyConfig('chapter'));
        document.getElementById('lobby-tab-class').addEventListener('click', () => updateLobbyConfig('class'));

        document.getElementById('start-quiz-btn').addEventListener('click', () => {
          const rawPool = getChapterQuestionPool();
          if (rawPool.length === 0) {
            alert('No questions found in this chapter!');
            return;
          }

          // Dynamically shuffle options and correct answer indexes for every question in pool
          // to distribute options equally and prevent Option B bias
          const pool = rawPool.map(q => shuffleQuestionOptions(q));

          // Select questions based on progression option
          let selectedQuestions = [];
          let remainingQuestions = [];
          if (quizQuestionOrder === 'progressive') {
            // Get random subset first
            const count = quizSelectedTotalCount === 999 ? pool.length : Math.min(quizSelectedTotalCount, pool.length);
            const shuffledSub = shuffleArray(pool).slice(0, count);
            // Sort that subset from easy to hard
            const weight = { 'easy': 1, 'medium': 2, 'hard': 3 };
            selectedQuestions = shuffledSub.sort((a, b) => {
              return weight[getQuestionDifficulty(a)] - weight[getQuestionDifficulty(b)];
            });
            const selectedIds = new Set(selectedQuestions.map(q => q.question));
            remainingQuestions = pool.filter(q => !selectedIds.has(q.question));
          } else {
            const shuffled = shuffleArray(pool);
            const count = quizSelectedTotalCount === 999 ? shuffled.length : Math.min(quizSelectedTotalCount, shuffled.length);
            selectedQuestions = shuffled.slice(0, count);
            remainingQuestions = shuffled.slice(count);
          }

          quizQuestions = selectedQuestions;
          unusedPoolQuestions = remainingQuestions;

          quizGameActive = true;
          quizCurrentQuestionIdx = 0;
          isTieBreaker = false;

          if (quizGameType === 'chapter') {
            quizUserAnswers = new Array(quizQuestions.length).fill(undefined);
          } else {
            quizTeamScores = new Array(quizNumTeams).fill(0);
            quizUserAnswers = new Array(quizQuestions.length).fill(undefined);
          }

          renderQuizContent();
        });

        return;
      }

      // 2. SOLO PRACTICE MODE
      if (quizGameType === 'chapter') {
        if (quizCurrentQuestionIdx >= quizQuestions.length) {
          let score = 0;
          let facedQuestionsCount = 0;
          let summaryListHtml = '';
          quizQuestions.forEach((q, idx) => {
            const userAns = quizUserAnswers[idx];
            if (userAns === undefined) return;
            facedQuestionsCount++;
            const correct = userAns === q.answer;
            if (correct) score++;
            
            let statusIcon = '❌';
            if (correct) statusIcon = '✅';
            else if (userAns === 'skipped') statusIcon = '🟡';
            
            let choiceText = userAns === 'skipped' ? 'Skipped' : String.fromCharCode(65 + userAns);
            
            summaryListHtml += `
              <div style="padding: 1rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); margin-bottom: 0.75rem; background: var(--bg-primary); display: flex; gap: 1rem; align-items: start;">
                <span style="font-size: 1.3rem;">${statusIcon}</span>
                <div>
                  <h4 style="margin: 0; font-size: 1.05rem; color: var(--text-normal);">${q.question}</h4>
                  <p style="margin: 0.25rem 0 0; font-size: 0.9rem; color: var(--text-muted);">
                    Your choice: <strong>${choiceText}</strong> | Correct: <strong>${String.fromCharCode(65 + q.answer)}</strong>
                  </p>
                </div>
              </div>
            `;
          });
          
          const denominator = facedQuestionsCount || 1;
          const pct = Math.round((score / denominator) * 100);

          tabContainer.innerHTML = `
            <div class="quiz-finish-card" style="padding: 2.5rem; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-lg); box-shadow: var(--card-shadow); max-width: 750px; margin: 1.5rem auto; text-align: center;">
              <span style="font-size: 4rem;">🏆</span>
              <h2 style="font-size: 2.2rem; margin-top: 0.5rem; margin-bottom: 0.25rem;">Practice Completed!</h2>
              <p style="color: var(--text-muted); margin-bottom: 1.5rem; font-size: 1.1rem;">Chapter Quiz Performance Overview</p>
              
              <div style="display: flex; justify-content: center; gap: 3rem; margin-bottom: 2rem;">
                <div style="text-align: center;">
                  <span style="display: block; font-size: 2.5rem; font-weight: 800; color: var(--primary-color);">${score} / ${quizQuestions.length}</span>
                  <span style="font-size: 0.95rem; color: var(--text-muted); font-weight: 500;">Total Score</span>
                </div>
                <div style="text-align: center;">
                  <span style="display: block; font-size: 2.5rem; font-weight: 800; color: var(--secondary-color);">${pct}%</span>
                  <span style="font-size: 0.95rem; color: var(--text-muted); font-weight: 500;">Accuracy</span>
                </div>
              </div>

              <div style="text-align: left; margin-bottom: 2rem;">
                <h3 style="font-size: 1.25rem; margin-bottom: 1rem; color: var(--text-normal);">Question Review:</h3>
                ${summaryListHtml}
              </div>

              <button id="exit-quiz-btn" class="nav-topic-btn prev" style="width: 100%; justify-content: center; font-size: 1.1rem; padding: 1rem; background: var(--primary-color); color: white; border: none; cursor: pointer;">
                Finish and Return to Lobby 🔄
              </button>
            </div>
          `;

          document.getElementById('exit-quiz-btn').addEventListener('click', () => {
            quizGameActive = false;
            renderQuizContent();
          });

          return;
        }

        const q = quizQuestions[quizCurrentQuestionIdx];
        const hasAnswered = quizUserAnswers[quizCurrentQuestionIdx] !== undefined;

        let optionsHtml = '';
        q.options.forEach((opt, oIdx) => {
          const letter = String.fromCharCode(65 + oIdx);
          let btnClass = 'option-btn';
          let styleOverride = '';
          if (hasAnswered) {
            const userChoice = quizUserAnswers[quizCurrentQuestionIdx];
            if (oIdx === q.answer) {
              btnClass += ' correct checked';
              styleOverride = 'border-color: #34d399; background-color: rgba(52, 211, 153, 0.1); color: #065f46; cursor: default;';
            } else if (oIdx === userChoice) {
              btnClass += ' incorrect checked';
              styleOverride = 'border-color: #f87171; background-color: rgba(248, 113, 113, 0.1); color: #991b1b; cursor: default;';
            } else {
              btnClass += ' checked';
              styleOverride = 'opacity: 0.6; cursor: default;';
            }
          }
          optionsHtml += `
            <button class="${btnClass}" data-oidx="${oIdx}" style="${styleOverride} font-size: 1.05rem; padding: 1rem; margin-bottom: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); width: 100%; text-align: left; display: flex; align-items: center; gap: 0.75rem; transition: all 0.2s;">
              <span class="option-letter" style="background: var(--bg-primary); border: 1px solid var(--border-color); width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;">${letter}</span>
              <span class="option-text">${opt}</span>
            </button>
          `;
        });

        tabContainer.innerHTML = `
          <div class="active-quiz-container" style="max-width: 800px; margin: 1rem auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-color);">
              <div>
                <span style="font-size: 0.9rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600; letter-spacing: 0.05em;">Practice Mode (${q.topicTitle})</span>
                <h3 style="margin: 0.25rem 0 0; font-size: 1.4rem; color: var(--text-normal);">Question ${quizCurrentQuestionIdx + 1} of ${quizQuestions.length}</h3>
              </div>
              <button id="abort-quiz-btn" style="background: none; border: 1px solid var(--border-color); color: var(--text-muted); padding: 0.5rem 1rem; border-radius: var(--radius-sm); cursor: pointer;">Quit Quiz</button>
            </div>

            <div class="quiz-card" style="padding: 2rem; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--card-shadow); margin-bottom: 1.5rem;">
              <div class="quiz-question" style="font-size: 1.3rem; font-weight: 600; line-height: 1.6; margin-bottom: 1.5rem; color: var(--text-normal);">${q.question}</div>
              <div class="quiz-options" style="display: flex; flex-direction: column;">
                ${optionsHtml}
              </div>

              <div id="exp-block" style="display: ${hasAnswered ? 'block' : 'none'}; margin-top: 1.5rem; padding: 1.25rem; border-left: 4px solid var(--secondary-color); background: var(--secondary-glow); border-radius: 0 var(--radius-sm) var(--radius-sm) 0;">
                <h4 style="margin: 0 0 0.5rem; color: var(--secondary-color); display: flex; align-items: center; gap: 0.5rem;"><span>💡</span> Expected Explanation:</h4>
                <p style="margin: 0; line-height: 1.6; font-size: 1rem; color: var(--text-normal);">${q.explanation}</p>
              </div>
            </div>
            <div style="display: flex; justify-content: flex-end;">
              ${hasAnswered ? `
                <button id="next-question-btn" class="nav-topic-btn next" style="background: var(--primary-color); color: white; border: none; font-size: 1.1rem; padding: 0.75rem 1.5rem; border-radius: var(--radius-sm); cursor: pointer;">
                  ${quizCurrentQuestionIdx === quizQuestions.length - 1 ? 'Finish Quiz ➔' : 'Next Question ➔'}
                </button>
              ` : `
                <button id="skip-question-btn" class="nav-topic-btn next" style="background: transparent; color: var(--text-muted); border: 1px solid var(--border-color); font-size: 1rem; padding: 0.75rem 1.5rem; border-radius: var(--radius-sm); cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
                  Skip Question ⏭️
                </button>
              `}
            </div>
          </div>
        `;

        document.getElementById('abort-quiz-btn').addEventListener('click', () => {
          if (confirm('Announce current results and finish quiz early?')) {
            quizCurrentQuestionIdx = quizQuestions.length;
            renderQuizContent();
          }
        });

        if (!hasAnswered) {
          tabContainer.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', () => {
              const userChoice = parseInt(btn.getAttribute('data-oidx'));
              quizUserAnswers[quizCurrentQuestionIdx] = userChoice;
              renderQuizContent();
            });
          });
          
          const skipBtn = document.getElementById('skip-question-btn');
          if (skipBtn) {
            skipBtn.addEventListener('click', () => {
              quizUserAnswers[quizCurrentQuestionIdx] = 'skipped';
              renderQuizContent();
            });
          }
        } else {
          document.getElementById('next-question-btn').addEventListener('click', () => {
            quizCurrentQuestionIdx++;
            renderQuizContent();
          });
        }

        return;
      }

      // 3. CLASSROOM TEAM BATTLE MODE
      if (quizGameType === 'class') {
        const maxScore = Math.max(...quizTeamScores);
        const winners = [];
        quizTeamScores.forEach((score, idx) => {
          if (score === maxScore) {
            winners.push(idx);
          }
        });

        if (quizCurrentQuestionIdx >= quizQuestions.length) {
          if (winners.length > 1) {
            isTieBreaker = true;
            let tiedTeamsNames = winners.map(idx => `Team ${idx + 1}`).join(' & ');
            tabContainer.innerHTML = `
              <div class="quiz-lobby-card" style="padding: 2.5rem; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-lg); box-shadow: var(--card-shadow); max-width: 750px; margin: 1.5rem auto; text-align: center;">
                <span style="font-size: 4rem;">⚖️</span>
                <h2 style="font-size: 2.2rem; color: #d97706; margin-top: 0.5rem; margin-bottom: 0.5rem;">SUDDEN DEATH TIE-BREAKER!</h2>
                <p style="font-size: 1.25rem; color: var(--text-normal); margin-bottom: 1.5rem; line-height: 1.6;">
                  We have a tie for first place! **${tiedTeamsNames}** are tied with **${maxScore} points**!
                </p>
                <div style="display: flex; justify-content: center; gap: 1rem; margin-bottom: 2rem;">
                  ${winners.map(idx => {
                    const c = getTeamColor(idx);
                    return `<span style="background: ${c.bg}; color: ${c.text}; border: 1px solid ${c.border}; font-weight: 700; padding: 0.5rem 1rem; border-radius: var(--radius-sm); font-size: 1.1rem;">Team ${idx + 1} (${maxScore} pts)</span>`;
                  }).join('')}
                </div>
                <p style="color: var(--text-muted); font-size: 1rem; margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto; line-height: 1.5;">
                  We will generate sudden death physics questions. The first of the tied teams to answer correctly and gain a point breaks the tie and wins!
                </p>
                <button id="start-tiebreaker-btn" class="nav-topic-btn next" style="width: 100%; justify-content: center; font-size: 1.2rem; padding: 1.2rem; background: #d97706; color: white; border: none;">
                  Begin Sudden Death Round! ⚡
                </button>
              </div>
            `;

            document.getElementById('start-tiebreaker-btn').addEventListener('click', () => {
              let newQuestion;
              if (unusedPoolQuestions.length > 0) {
                newQuestion = unusedPoolQuestions.shift();
              } else {
                const pool = getChapterQuestionPool();
                newQuestion = pool[Math.floor(Math.random() * pool.length)];
              }
              
              quizQuestions.push(newQuestion);
              quizUserAnswers.push(undefined);
              renderQuizContent();
            });

            return;
          } else {
            const winnerIdx = winners[0];
            const winnerColor = getTeamColor(winnerIdx);

            let scoreboardRowsHtml = '';
            const rankedTeams = quizTeamScores
              .map((score, idx) => ({ idx, score }))
              .sort((a, b) => b.score - a.score);

            rankedTeams.forEach((item, pos) => {
              const c = getTeamColor(item.idx);
              const isWinner = item.idx === winnerIdx;
              scoreboardRowsHtml += `
                <tr style="background: ${isWinner ? 'rgba(' + winnerColor.rgb + ', 0.08)' : 'transparent'}; font-weight: ${isWinner ? '700' : 'normal'}; border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.75rem; text-align: center;">
                    ${pos === 0 ? '👑 1st' : pos === 1 ? '🥈 2nd' : pos === 2 ? '🥉 3rd' : (pos + 1) + 'th'}
                  </td>
                  <td style="padding: 0.75rem;">
                    <span style="background: ${c.bg}; color: ${c.text}; border: 1px solid ${c.border}; font-weight: 700; padding: 0.25rem 0.6rem; border-radius: var(--radius-xs); font-size: 0.9rem;">Team ${item.idx + 1}</span>
                  </td>
                  <td style="padding: 0.75rem; font-weight: 700; text-align: right; color: ${isWinner ? 'var(--primary-color)' : 'var(--text-normal)'};">
                    ${item.score} pts
                  </td>
                </tr>
              `;
            });

            tabContainer.innerHTML = `
              <div class="quiz-finish-card" style="padding: 3rem; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-lg); box-shadow: var(--card-shadow); max-width: 650px; margin: 1.5rem auto; text-align: center;">
                <div style="font-size: 5rem; line-height: 1; margin-bottom: 1rem;">🏆</div>
                <h1 style="font-size: 2.5rem; color: ${winnerColor.text}; margin: 0 0 0.5rem; text-transform: uppercase;">TEAM ${winnerIdx + 1} CHAMPIONS!</h1>
                <p style="color: var(--text-muted); font-size: 1.15rem; margin-bottom: 2rem;">Vidyasetu Classroom Battle Winners</p>

                <div style="background: var(--bg-primary); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 2rem;">
                  <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 1rem;">
                    <thead>
                      <tr style="border-bottom: 2px solid var(--border-color); font-weight: 600; color: var(--text-muted);">
                        <th style="padding: 0.5rem; text-align: center; width: 80px;">Rank</th>
                        <th style="padding: 0.5rem;">Team</th>
                        <th style="padding: 0.5rem; text-align: right;">Final Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${scoreboardRowsHtml}
                    </tbody>
                  </table>
                </div>

                <button id="exit-battle-btn" class="nav-topic-btn prev" style="width: 100%; justify-content: center; font-size: 1.25rem; padding: 1.2rem; background: var(--primary-color); color: white; border: none;">
                  Finish Battle & Return to Lobby 🔄
                </button>
              </div>
            `;

            document.getElementById('exit-battle-btn').addEventListener('click', () => {
              quizGameActive = false;
              renderQuizContent();
            });

            return;
          }
        }

        const q = quizQuestions[quizCurrentQuestionIdx];
        const roundAnswerAwarded = quizUserAnswers[quizCurrentQuestionIdx] !== undefined;

        let scoreboardBadges = '';
        quizTeamScores.forEach((score, idx) => {
          const c = getTeamColor(idx);
          const leading = score === maxScore && score > 0;
          const tiedBreakerTeam = isTieBreaker && winners.includes(idx);
          const normalBorder = leading ? '2px solid var(--primary-color)' : `1px solid ${c.border}`;
          
          scoreboardBadges += `
            <div style="padding: 0.75rem 1.25rem; background: ${c.bg}; color: ${c.text}; border: ${normalBorder}; border-radius: var(--radius-sm); flex: 1; min-width: 110px; display: flex; flex-direction: column; align-items: center; box-shadow: ${leading ? '0 0 10px rgba(99, 102, 241, 0.3)' : 'none'}; transition: all 0.2s;">
              <span style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
                ${leading ? '👑 ' : ''}Team ${idx + 1}
              </span>
              <span style="font-size: 1.4rem; font-weight: 800; margin-top: 0.25rem;">${score} <span style="font-size: 0.85rem; font-weight: 600;">pts</span></span>
              ${isTieBreaker ? `
                <span style="font-size: 0.65rem; font-weight: 700; background: ${tiedBreakerTeam ? '#d97706' : '#9ca3af'}; color: white; padding: 0.1rem 0.4rem; border-radius: 99px; margin-top: 0.25rem;">
                  ${tiedBreakerTeam ? 'COMPETING' : 'ELIMINATED'}
                </span>
              ` : ''}
            </div>
          `;
        });

        let awardButtonsHtml = '';
        const activeAwardPool = isTieBreaker ? winners : Array.from({ length: quizNumTeams }, (_, i) => i);
        activeAwardPool.forEach(idx => {
          const c = getTeamColor(idx);
          const active = quizUserAnswers[quizCurrentQuestionIdx] === idx;
          const borderStyle = active ? 'border-color: #10b981; background: #d1fae5; color: #065f46; box-shadow: 0 0 8px rgba(16, 185, 129, 0.4);' : `border-color: ${c.border}; background: ${c.bg}; color: ${c.text};`;
          awardButtonsHtml += `
            <button class="award-team-btn" data-team="${idx}" style="${borderStyle} padding: 0.75rem 1rem; border-width: 2px; border-style: solid; border-radius: var(--radius-sm); font-size: 1rem; font-weight: 700; cursor: pointer; transition: all 0.15s; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
              <span>🏆</span> Team ${idx + 1}
            </button>
          `;
        });
        const noOneActive = quizUserAnswers[quizCurrentQuestionIdx] === 'none';
        const noOneStyle = noOneActive ? 'border-color: #ef4444; background: #fee2e2; color: #991b1b;' : 'border-color: var(--border-color); background: transparent; color: var(--text-muted);';
        awardButtonsHtml += `
          <button class="award-team-btn" data-team="none" style="${noOneStyle} padding: 0.75rem 1rem; border-width: 2px; border-style: solid; border-radius: var(--radius-sm); font-size: 1rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
            <span>⏭️</span> Skip / No points
          </button>
        `;

        let optionsHtml = '';
        q.options.forEach((opt, oIdx) => {
          const letter = String.fromCharCode(65 + oIdx);
          optionsHtml += `
            <button class="class-option-btn option-btn" data-oidx="${oIdx}" style="font-size: 1.05rem; padding: 1.1rem; margin-bottom: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); width: 100%; text-align: left; display: flex; align-items: center; gap: 0.75rem; transition: all 0.2s;">
              <span class="option-letter" style="background: var(--bg-primary); border: 1px solid var(--border-color); width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;">${letter}</span>
              <span class="option-text">${opt}</span>
            </button>
          `;
        });

        tabContainer.innerHTML = `
          <div class="active-quiz-container" style="max-width: 1000px; margin: 1rem auto;">
            <div style="margin-bottom: 1.5rem;">
              <label style="display: block; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em; margin-bottom: 0.5rem; text-align: center;">Class Scoreboard</label>
              <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; justify-content: center;">
                ${scoreboardBadges}
              </div>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border-color);">
              <div>
                <span style="font-size: 0.9rem; text-transform: uppercase; color: #d97706; font-weight: 700; letter-spacing: 0.05em;">
                  ${isTieBreaker ? '⚡ SUDDEN DEATH TIE-BREAKER ⚡' : `Class Battle — Chapter: ${chapterObj.title}`}
                </span>
                <h3 style="margin: 0.25rem 0 0; font-size: 1.4rem; color: var(--text-normal);">
                  ${isTieBreaker ? `Tiebreaker Question` : `Question ${quizCurrentQuestionIdx + 1} of ${quizQuestions.length}`}
                </h3>
              </div>
              <button id="abort-battle-btn" style="background: none; border: 1px solid var(--border-color); color: var(--text-muted); padding: 0.5rem 1rem; border-radius: var(--radius-sm); cursor: pointer;">Quit Battle</button>
            </div>

            <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 1.5rem; align-items: start;">
              <div>
                <div class="quiz-card" style="padding: 2rem; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--card-shadow); margin-bottom: 1.5rem;">
                  <span style="font-size: 0.85rem; color: var(--accent-color); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 0.5rem;">Topic: ${q.topicTitle}</span>
                  <div class="quiz-question" style="font-size: 1.3rem; font-weight: 600; line-height: 1.6; margin-bottom: 1.5rem; color: var(--text-normal);">${q.question}</div>
                  <div class="quiz-options" style="display: flex; flex-direction: column;">
                    ${optionsHtml}
                  </div>

                  <div id="class-exp-panel" style="display: none; margin-top: 1.5rem; padding: 1.25rem; border-left: 4px solid var(--secondary-color); background: var(--secondary-glow); border-radius: 0 var(--radius-sm) var(--radius-sm) 0;">
                    <h4 style="margin: 0 0 0.5rem; color: var(--secondary-color); display: flex; align-items: center; gap: 0.5rem;"><span>💡</span> Expected Explanation:</h4>
                    <p style="margin: 0; line-height: 1.6; font-size: 1rem; color: var(--text-normal);">${q.explanation}</p>
                  </div>
                </div>
              </div>

              <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 1.5rem; border-radius: var(--radius-md); box-shadow: var(--card-shadow); display: flex; flex-direction: column; gap: 1.5rem;">
                <div>
                  <h3 style="margin-top: 0; font-size: 1.2rem; color: var(--primary-color); display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                    <span>👩‍🏫</span> Blackboard Controller
                  </h3>
                  <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.5; margin: 0;">
                    Read this question to the class. Let teams discuss, then reveal the correct answer and allocate points!
                  </p>
                </div>

                <button id="class-reveal-btn" style="width: 100%; padding: 1rem; font-size: 1.05rem; font-weight: 700; background: var(--primary-color); color: white; border: none; border-radius: var(--radius-sm); cursor: pointer; transition: all 0.2s;">
                  Reveal Answer to Class 👁️
                </button>

                <div>
                  <label style="display: block; font-weight: 600; margin-bottom: 0.75rem; color: var(--text-normal);">Award Round Points To:</label>
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
                    ${awardButtonsHtml}
                  </div>
                </div>

                <div style="margin-top: 1rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
                  <button id="class-next-question-btn" class="nav-topic-btn next" style="width: 100%; justify-content: center; font-size: 1.15rem; padding: 1rem; cursor: ${roundAnswerAwarded ? 'pointer' : 'not-allowed'}; opacity: ${roundAnswerAwarded ? '1' : '0.5'};" ${roundAnswerAwarded ? '' : 'disabled'}>
                    ${quizCurrentQuestionIdx === quizQuestions.length - 1 && !isTieBreaker ? 'Finish Battle & View Results ➔' : 'Proceed to Next Question ➔'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        `;

        const optButtons = tabContainer.querySelectorAll('.class-option-btn');
        optButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            const oIdx = parseInt(btn.getAttribute('data-oidx'));
            optButtons.forEach(sib => {
              const currIdx = parseInt(sib.getAttribute('data-oidx'));
              if (currIdx === q.answer) {
                sib.style.borderColor = '#34d399';
                sib.style.background = 'rgba(52, 211, 153, 0.1)';
                sib.style.color = '#065f46';
              } else if (currIdx === oIdx) {
                sib.style.borderColor = '#f87171';
                sib.style.background = 'rgba(248, 113, 113, 0.1)';
                sib.style.color = '#991b1b';
              } else {
                sib.style.opacity = '0.5';
              }
              sib.disabled = true;
            });
            document.getElementById('class-exp-panel').style.display = 'block';
            document.getElementById('class-reveal-btn').style.display = 'none';
          });
        });
        document.getElementById('abort-battle-btn').addEventListener('click', () => {
          if (confirm('Announce current scoreboard standings and finish battle early?')) {
            quizCurrentQuestionIdx = quizQuestions.length;
            renderQuizContent();
          }
        });

        document.getElementById('class-reveal-btn').addEventListener('click', () => {
          optButtons.forEach(sib => {
            const currIdx = parseInt(sib.getAttribute('data-oidx'));
            if (currIdx === q.answer) {
              sib.style.borderColor = '#34d399';
              sib.style.background = 'rgba(52, 211, 153, 0.1)';
              sib.style.color = '#065f46';
            } else {
              sib.style.opacity = '0.5';
            }
            sib.disabled = true;
          });
          document.getElementById('class-exp-panel').style.display = 'block';
          document.getElementById('class-reveal-btn').style.display = 'none';
        });

        tabContainer.querySelectorAll('.award-team-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const selection = btn.getAttribute('data-team');
            
            const previousAward = quizUserAnswers[quizCurrentQuestionIdx];
            if (previousAward !== undefined && previousAward !== 'none') {
              quizTeamScores[previousAward] -= 10;
            }

            if (selection === 'none') {
              quizUserAnswers[quizCurrentQuestionIdx] = 'none';
            } else {
              const teamIdx = parseInt(selection);
              quizUserAnswers[quizCurrentQuestionIdx] = teamIdx;
              quizTeamScores[teamIdx] += 10;
            }

            renderQuizContent();
          });
        });

        if (roundAnswerAwarded) {
          document.getElementById('class-next-question-btn').addEventListener('click', () => {
            if (isTieBreaker) {
              const breakerMax = Math.max(...quizTeamScores);
              const breakerWinners = [];
              quizTeamScores.forEach((score, idx) => {
                if (score === breakerMax) {
                  breakerWinners.push(idx);
                }
              });

              if (breakerWinners.length === 1) {
                quizCurrentQuestionIdx = quizQuestions.length;
              } else {
                let newQuestion;
                if (unusedPoolQuestions.length > 0) {
                  newQuestion = unusedPoolQuestions.shift();
                } else {
                  const pool = getChapterQuestionPool();
                  newQuestion = pool[Math.floor(Math.random() * pool.length)];
                }
                
                quizQuestions.push(newQuestion);
                quizUserAnswers.push(undefined);
                quizCurrentQuestionIdx++;
              }
            } else {
              quizCurrentQuestionIdx++;
            }
            renderQuizContent();
          });
        }
      }
    }

    function initBalancingLab() {
      const canvas = document.getElementById('balancer-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const selEq = document.getElementById('sel-balancer-eq');
      const ctrlContainer = document.getElementById('balancer-controls-container');
      const tblContainer = document.getElementById('balancer-table');
      const statusBadge = document.getElementById('balancer-status-badge');

      const equations = {
        water: {
          equationStr: "H₂ + O₂ → H₂O",
          elements: ['H', 'O'],
          reactants: [
            { formula: 'H₂', composition: { H: 2 }, coefficient: 1 },
            { formula: 'O₂', composition: { O: 2 }, coefficient: 1 }
          ],
          products: [
            { formula: 'H₂O', composition: { H: 2, O: 1 }, coefficient: 1 }
          ],
          balanced: {
            coefs: [2, 1, 2]
          }
        },
        haber: {
          equationStr: "N₂ + H₂ → NH₃",
          elements: ['N', 'H'],
          reactants: [
            { formula: 'N₂', composition: { N: 2 }, coefficient: 1 },
            { formula: 'H₂', composition: { H: 2 }, coefficient: 1 }
          ],
          products: [
            { formula: 'NH₃', composition: { N: 1, H: 3 }, coefficient: 1 }
          ],
          balanced: {
            coefs: [1, 3, 2]
          }
        },
        rust: {
          equationStr: "Fe + H₂O → Fe₃O₄ + H₂",
          elements: ['Fe', 'H', 'O'],
          reactants: [
            { formula: 'Fe', composition: { Fe: 1 }, coefficient: 1 },
            { formula: 'H₂O', composition: { H: 2, O: 1 }, coefficient: 1 }
          ],
          products: [
            { formula: 'Fe₃O₄', composition: { Fe: 3, O: 4 }, coefficient: 1 },
            { formula: 'H₂', composition: { H: 2 }, coefficient: 1 }
          ],
          balanced: {
            coefs: [3, 4, 1, 4]
          }
        }
      };

      let activeEqKey = 'water';
      let eqData = JSON.parse(JSON.stringify(equations[activeEqKey]));

      function renderControls() {
        ctrlContainer.innerHTML = '';
        eqData.reactants.forEach((r, idx) => {
          createControlRow(r.formula, (val) => {
            eqData.reactants[idx].coefficient = val;
            updateSimulation();
          });
        });
        eqData.products.forEach((p, idx) => {
          createControlRow(p.formula, (val) => {
            eqData.products[idx].coefficient = val;
            updateSimulation();
          });
        });
      }

      function createControlRow(label, callback) {
        const row = document.createElement('div');
        row.style.display = 'flex';
        row.style.alignItems = 'center';
        row.style.justifyContent = 'space-between';
        row.style.background = 'var(--bg-primary)';
        row.style.padding = '0.5rem 0.75rem';
        row.style.borderRadius = 'var(--radius-sm)';
        row.style.border = '1px solid var(--border-color)';
        
        row.innerHTML = `
          <span style="font-weight:700; color:var(--text-normal);">${label}</span>
          <div style="display:flex; align-items:center; gap:0.5rem; color:var(--text-normal);">
            <button class="nav-topic-btn prev btn-dec" style="padding:0.25rem 0.6rem; min-width:30px; font-size:0.95rem; font-weight:bold;">-</button>
            <span class="lbl-coef" style="font-weight:700; min-width:20px; text-align:center;">1</span>
            <button class="nav-topic-btn next btn-inc" style="padding:0.25rem 0.6rem; min-width:30px; font-size:0.95rem; font-weight:bold;">+</button>
          </div>
        `;
        
        let coefVal = 1;
        const lbl = row.querySelector('.lbl-coef');
        const dec = row.querySelector('.btn-dec');
        const inc = row.querySelector('.btn-inc');
        
        dec.addEventListener('click', () => {
          if (coefVal > 1) {
            coefVal--;
            lbl.textContent = coefVal;
            callback(coefVal);
          }
        });
        inc.addEventListener('click', () => {
          if (coefVal < 9) {
            coefVal++;
            lbl.textContent = coefVal;
            callback(coefVal);
          }
        });
        ctrlContainer.appendChild(row);
      }



      let confettiParticles = [];
      let confettiTimerId = null;
      let wasBalanced = false;

      function triggerConfetti() {
        confettiParticles = [];
        const colors = ['#f43f5e', '#3b82f6', '#10b981', '#fbbf24', '#a855f7', '#6366f1'];
        for (let i = 0; i < 70; i++) {
          confettiParticles.push({
            x: canvas.width / 2,
            y: 80,
            vx: (Math.random() - 0.5) * 8,
            vy: (Math.random() - 1) * 6 - 2,
            size: Math.random() * 5 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rSpeed: (Math.random() - 0.5) * 10,
            life: 1.0,
            decay: Math.random() * 0.015 + 0.01
          });
        }
        
        if (confettiTimerId) cancelAnimationFrame(confettiTimerId);
        animateConfetti();
      }

      function animateConfetti() {
        let active = false;
        const W = canvas.width;
        const H = canvas.height;
        
        // Re-draw base
        const metrics = getSimulationMetrics();
        drawSimulationBase(metrics);

        ctx.save();
        confettiParticles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.15; // gravity
          p.vx *= 0.98; // drag
          p.rotation += p.rSpeed;
          p.life -= p.decay;
          
          if (p.life > 0) {
            active = true;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.life;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();
          }
        });
        ctx.restore();

        if (active && wasBalanced) {
          confettiTimerId = requestAnimationFrame(animateConfetti);
        }
      }

      function getSimulationMetrics() {
        const reactantCounts = {};
        const productCounts = {};
        eqData.elements.forEach(el => {
          reactantCounts[el] = 0;
          productCounts[el] = 0;
        });

        eqData.reactants.forEach(r => {
          Object.keys(r.composition).forEach(el => {
            reactantCounts[el] += r.composition[el] * r.coefficient;
          });
        });
        eqData.products.forEach(p => {
          Object.keys(p.composition).forEach(el => {
            productCounts[el] += p.composition[el] * p.coefficient;
          });
        });

        let isBalanced = true;
        let totalReactants = 0;
        let totalProducts = 0;
        eqData.elements.forEach(el => {
          totalReactants += reactantCounts[el];
          totalProducts += productCounts[el];
          if (reactantCounts[el] !== productCounts[el]) {
            isBalanced = false;
          }
        });

        return { reactantCounts, productCounts, isBalanced, totalReactants, totalProducts };
      }

      function drawSimulationBase(metrics) {
        const W = canvas.width;
        const H = canvas.height;
        ctx.clearRect(0, 0, W, H);

        ctx.strokeStyle = 'var(--border-color)';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(W/2, H - 40);
        ctx.lineTo(W/2, 100);
        ctx.stroke();
        ctx.fillRect(W/2 - 60, H - 40, 120, 10);

        if (metrics.isBalanced) {
          statusBadge.textContent = 'BALANCED ✓';
          statusBadge.style.background = '#10b981';
          
          // Draw balanced glow shield on canvas
          ctx.fillStyle = 'rgba(16, 185, 129, 0.08)';
          ctx.beginPath();
          ctx.arc(W/2, 150, 80, 0, 2*Math.PI);
          ctx.fill();
          
          ctx.fillStyle = '#10b981';
          ctx.font = 'bold 12px system-ui';
          ctx.fillText("EQUATION BALANCED", W/2 - 62, 154);
        } else {
          statusBadge.textContent = 'UNBALANCED';
          statusBadge.style.background = '#ef4444';
        }

        const maxTilt = 20;
        let tilt = 0;
        if (metrics.totalReactants > metrics.totalProducts) tilt = -maxTilt;
        else if (metrics.totalProducts > metrics.totalReactants) tilt = maxTilt;

        ctx.save();
        ctx.translate(W/2, 100);
        ctx.rotate((tilt * Math.PI) / 180);

        ctx.strokeStyle = 'var(--accent-color)';
        ctx.beginPath();
        ctx.moveTo(-160, 0);
        ctx.lineTo(160, 0);
        ctx.stroke();

        ctx.strokeStyle = 'var(--text-muted)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(-160, 0);
        ctx.lineTo(-190, 60);
        ctx.lineTo(-130, 60);
        ctx.closePath();
        ctx.stroke();
        ctx.fillRect(-195, 60, 70, 5);

        ctx.beginPath();
        ctx.moveTo(160, 0);
        ctx.lineTo(130, 60);
        ctx.lineTo(190, 60);
        ctx.closePath();
        ctx.stroke();
        ctx.fillRect(125, 60, 70, 5);
        ctx.restore();

        ctx.save();
        ctx.translate(W/2 - 160, 160 + (tilt < 0 ? -10 : (tilt > 0 ? 10 : 0)));
        drawAtomsList(eqData.reactants, ctx);
        ctx.restore();

        ctx.save();
        ctx.translate(W/2 + 160, 160 + (tilt > 0 ? -10 : (tilt < 0 ? 10 : 0)));
        drawAtomsList(eqData.products, ctx);
        ctx.restore();
      }

      function updateSimulation() {
        const metrics = getSimulationMetrics();
        drawSimulationBase(metrics);

        if (metrics.isBalanced) {
          if (!wasBalanced) {
            wasBalanced = true;
            triggerConfetti();
          }
        } else {
          wasBalanced = false;
          confettiParticles = [];
          if (confettiTimerId) {
            cancelAnimationFrame(confettiTimerId);
            confettiTimerId = null;
          }
        }

        let tableHtml = `<div style="display:grid; grid-template-columns: 1fr 1fr 1fr; font-weight:700; border-bottom:1px solid var(--border-color); padding-bottom:0.25rem; margin-bottom:0.5rem; text-align:center;">
          <span>Element</span><span>Reactants (LHS)</span><span>Products (RHS)</span>
        </div>`;
        eqData.elements.forEach(el => {
          const rC = metrics.reactantCounts[el];
          const pC = metrics.productCounts[el];
          const color = rC === pC ? '#10b981' : '#ef4444';
          tableHtml += `<div style="display:grid; grid-template-columns: 1fr 1fr 1fr; text-align:center; padding:0.2rem 0; color:${color}; font-weight:bold;">
            <span>${el}</span><span>${rC}</span><span>${pC}</span>
          </div>`;
        });
        tblContainer.innerHTML = tableHtml;
      }

      function drawAtomsList(items, cContext) {
        // Vibrant glossy colors for molecule balloons
        const colors = { 'H₂': '#38bdf8', 'O₂': '#fb7185', 'H₂O': '#a78bfa', 'N₂': '#34d399', 'NH₃': '#facc15', 'Fe': '#fbbf24', 'Fe₃O₄': '#f43f5e' };
        const shadowColors = { 'H₂': '#0284c7', 'O₂': '#be123c', 'H₂O': '#6d28d9', 'N₂': '#059669', 'NH₃': '#a16207', 'Fe': '#b45309', 'Fe₃O₄': '#9f1239' };
        
        let row = 0;
        let col = 0;
        
        items.forEach(item => {
          const num = item.coefficient;
          const formula = item.formula;
          const baseColor = colors[formula] || '#94a3b8';
          const shadowColor = shadowColors[formula] || '#334155';
          
          for (let i = 0; i < num; i++) {
            const x = -30 + col * 30;
            const y = -25 + row * 28;
            
            // 3D Balloon gloss gradient (moved specular highlight to top-left edge)
            const grad = cContext.createRadialGradient(x - 6, y - 8, 1, x, y, 14);
            grad.addColorStop(0, 'rgba(255,255,255,0.7)'); // Softer highlight
            grad.addColorStop(0.3, baseColor);
            grad.addColorStop(1, shadowColor);

            // Draw balloon sphere
            cContext.beginPath();
            cContext.arc(x, y, 13, 0, 2 * Math.PI);
            cContext.fillStyle = grad;
            cContext.fill();
            
            // Subtle rim light
            cContext.strokeStyle = 'rgba(255,255,255,0.2)';
            cContext.lineWidth = 1;
            cContext.stroke();

            // Molecule Formula Label inside balloon (with text shadow for clarity)
            cContext.save();
            cContext.fillStyle = 'white';
            cContext.font = 'bold 11px system-ui';
            cContext.shadowColor = 'rgba(0, 0, 0, 0.7)';
            cContext.shadowBlur = 4;
            const tw = cContext.measureText(formula).width;
            cContext.fillText(formula, x - tw/2, y + 4);
            cContext.restore();

            col++;
            if (col > 2) {
              col = 0;
              row++;
            }
          }
        });
      }

      selEq.addEventListener('change', () => {
        activeEqKey = selEq.value;
        eqData = JSON.parse(JSON.stringify(equations[activeEqKey]));
        renderControls();
        updateSimulation();
      });

      renderControls();
      updateSimulation();
    }

    // Bind Tab Click Handlers
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        switchTab(btn.getAttribute('data-tab'));
      });
    });

    const voiceBtn = document.getElementById('btn-audio-speak');
    if (voiceBtn) {
      voiceBtn.addEventListener('click', () => {
        speakSummary();
      });
    }

    function speakSummary() {
      if (!window.speechSynthesis) return;
      
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        isSpeaking = false;
        updateVoiceButton();
        return;
      }

      let textToRead = "";
      if (topicObj.theory && topicObj.theory.sections) {
        textToRead = topicObj.theory.sections.map(sec => sec.heading + ". " + sec.text).join(" ");
      } else {
        textToRead = "Welcome to " + topicObj.title + ". Read the lesson slides and proceed to visual laboratories.";
      }

      textToRead = textToRead.replace(/[#*`_]/g, '');

      speechUtterance = new SpeechSynthesisUtterance(textToRead);
      speechUtterance.rate = 1.0;
      speechUtterance.pitch = 1.05;

      speechUtterance.onend = () => {
        isSpeaking = false;
        updateVoiceButton();
      };
      speechUtterance.onerror = () => {
        isSpeaking = false;
        updateVoiceButton();
      };

      isSpeaking = true;
      updateVoiceButton();
      window.speechSynthesis.speak(speechUtterance);
    }

    function updateVoiceButton() {
      const btn = document.getElementById('btn-audio-speak');
      if (!btn) return;

      if (isSpeaking) {
        btn.classList.add('playing');
        btn.innerHTML = `<span>⏸ Pause AI Tutor</span>
          <div class="audio-wave-container" id="voice-audio-wave">
            <div class="audio-wave-bar"></div>
            <div class="audio-wave-bar"></div>
            <div class="audio-wave-bar"></div>
          </div>`;
      } else {
        btn.classList.remove('playing');
        btn.innerHTML = `<span>🔊 AI Tutor Voice</span>
          <div class="audio-wave-container" id="voice-audio-wave" style="display: none;">
            <div class="audio-wave-bar"></div>
            <div class="audio-wave-bar"></div>
            <div class="audio-wave-bar"></div>
          </div>`;
      }
    }
    
    // Initial content render
    switchTab('lesson');
  }, 100);
    function initReactionsLab() {
      const canvas = document.getElementById('reactions-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const selReaction = document.getElementById('sel-reaction-type');
      const btnRun = document.getElementById('btn-run-reaction');
      const obsPanel = document.getElementById('reaction-obs-panel');

      const mode = selReaction.dataset.mode;
      const options = selReaction.querySelectorAll('option');
      options.forEach(opt => {
        if (mode === 'chemistry-reactions-part1') {
          if (['iron-copper', 'barium-sodium', 'copper-oxidation'].includes(opt.value)) {
            opt.remove();
          }
        } else if (mode === 'chemistry-reactions-part2') {
          if (['slaking', 'electrolysis', 'lead-nitrate'].includes(opt.value)) {
            opt.remove();
          }
        }
      });

      let reactionActive = false;
      let timerId = null;
      let frame = 0;
      let currentReaction = selReaction.value;

      function drawDefault() {
        const W = canvas.width;
        const H = canvas.height;
        ctx.clearRect(0, 0, W, H);
        
        if (currentReaction !== 'copper-oxidation' && currentReaction !== 'lead-nitrate') {
          ctx.strokeStyle = 'var(--border-color)';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(W/2 - 60, 100);
          ctx.lineTo(W/2 - 60, 240);
          ctx.lineTo(W/2 + 60, 240);
          ctx.lineTo(W/2 + 60, 100);
          ctx.stroke();
        }

        if (currentReaction === 'slaking') {
          // Chemical Jar on the left (Always visible)
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.fillRect(W/2 - 160, 150, 60, 90);
          ctx.strokeStyle = '#94a3b8';
          ctx.lineWidth = 2;
          ctx.strokeRect(W/2 - 160, 150, 60, 90);
          ctx.strokeRect(W/2 - 145, 130, 30, 20); // Jar Neck
          ctx.fillStyle = '#f1f5f9'; // CaO powder inside
          ctx.fillRect(W/2 - 158, 180, 56, 58);
          
          // Jar Label
          ctx.fillStyle = '#f8fafc';
          ctx.fillRect(W/2 - 150, 160, 40, 25);
          ctx.strokeStyle = '#94a3b8';
          ctx.strokeRect(W/2 - 150, 160, 40, 25);
          ctx.fillStyle = '#1e293b';
          ctx.font = 'bold 12px system-ui';
          ctx.fillText("CaO", W/2 - 142, 177);

          if (!reactionActive) {
            // Draw Water Base
            ctx.fillStyle = 'rgba(59, 130, 246, 0.25)';
            ctx.fillRect(W/2 - 58, 150, 116, 88);

            // Spoon (Static, holding CaO)
            ctx.fillStyle = '#cbd5e1'; 
            ctx.beginPath();
            ctx.moveTo(W/2 - 60, 75);
            ctx.quadraticCurveTo(W/2 - 10, 85, W/2 + 20, 75);
            ctx.lineTo(W/2 + 25, 78);
            ctx.quadraticCurveTo(W/2 - 10, 95, W/2 - 65, 80);
            ctx.fill();
            ctx.fillStyle = '#94a3b8';
            ctx.fillRect(W/2 - 120, 75, 60, 4);

            // CaO pieces on spoon
            ctx.fillStyle = '#f8fafc';
            ctx.beginPath();
            ctx.arc(W/2 - 20, 75, 8, 0, 2*Math.PI);
            ctx.arc(W/2 - 5, 76, 10, 0, 2*Math.PI);
            ctx.arc(W/2 + 10, 75, 7, 0, 2*Math.PI);
            ctx.fill();
            ctx.strokeStyle = '#cbd5e1';
            ctx.stroke();

            // Thermometer Static (Inside beaker)
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.fillRect(W/2 + 30, 110, 12, 120);
            ctx.beginPath();
            ctx.arc(W/2 + 36, 235, 12, 0, 2*Math.PI);
            ctx.fill();
            ctx.strokeStyle = '#94a3b8';
            ctx.strokeRect(W/2 + 30, 110, 12, 120);
            ctx.stroke();

            ctx.fillStyle = '#ef4444';
            ctx.fillRect(W/2 + 33, 230, 6, 5); // 25C = small bulb
            ctx.beginPath();
            ctx.arc(W/2 + 36, 235, 9, 0, 2*Math.PI);
            ctx.fill();

            ctx.fillStyle = '#ef4444';
            ctx.font = 'bold 12px system-ui';
            ctx.fillText("25°C", W/2 + 48, 230);
          }
        } else if (currentReaction === 'electrolysis') {
          ctx.fillStyle = '#334155';
          ctx.fillRect(W/2 - 25, 140, 10, 100);
          ctx.fillRect(W/2 + 15, 140, 10, 100);
          
          ctx.fillStyle = 'var(--text-muted)';
          ctx.font = 'bold 9px system-ui';
          ctx.fillText("Cathode (-)", W/2 - 48, 130);
          ctx.fillText("Anode (+)", W/2 + 10, 130);
          
          // Circuit wiring
          ctx.strokeStyle = '#64748b';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(W/2 - 20, 140);
          ctx.lineTo(W/2 - 20, 60);
          ctx.lineTo(W/2 - 40, 60);
          
          ctx.moveTo(W/2 + 20, 140);
          ctx.lineTo(W/2 + 20, 60);
          ctx.lineTo(W/2 + 50, 60);
          ctx.stroke();

          // Battery
          ctx.fillStyle = '#94a3b8';
          ctx.fillRect(W/2 - 40, 50, 40, 20);
          ctx.fillStyle = '#0f172a';
          ctx.fillRect(W/2 - 40, 50, 5, 20); // Negative
          ctx.fillRect(W/2, 56, 4, 8); // Positive
          ctx.fillStyle = 'var(--text-muted)';
          ctx.font = '10px system-ui';
          ctx.fillText("Battery", W/2 - 35, 45);

          // Switch
          ctx.beginPath();
          ctx.moveTo(W/2 + 50, 60);
          if (reactionActive) {
            ctx.lineTo(W/2 + 80, 60);
          } else {
            ctx.lineTo(W/2 + 75, 45);
          }
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(W/2 + 80, 60);
          ctx.lineTo(W/2 + 100, 60);
          ctx.stroke();

          ctx.fillStyle = '#ef4444';
          ctx.beginPath();
          ctx.arc(W/2 + 50, 60, 3, 0, 2*Math.PI);
          ctx.arc(W/2 + 80, 60, 3, 0, 2*Math.PI);
          ctx.fill();

          ctx.fillStyle = 'rgba(59, 130, 246, 0.15)';
          
          // Draw water dynamically if frame > 0
          let waterDrop = 0;
          if (frame > 0) {
             waterDrop = Math.min(80, frame * 0.05);
          }
          ctx.fillRect(W/2 - 58, 150 + waterDrop, 116, 88 - waterDrop);

          ctx.strokeStyle = 'var(--text-muted)';
          ctx.lineWidth = 2;
          ctx.strokeRect(W/2 - 32, 100, 24, 130);
          ctx.strokeRect(W/2 + 8, 100, 24, 130);
        } else if (currentReaction === 'lead-nitrate') {
          ctx.fillStyle = '#475569';
          ctx.fillRect(W/2 + 15, H/2 + 75, 40, 15);
          ctx.fillRect(W/2 + 30, H/2 + 50, 10, 25);

          ctx.save();
          ctx.translate(W/2, H/2);
          ctx.rotate((-30 * Math.PI) / 180);
          ctx.strokeStyle = 'var(--border-color)';
          ctx.beginPath();
          ctx.moveTo(-15, -60);
          ctx.lineTo(-15, 60);
          ctx.arc(0, 60, 15, Math.PI, 0, true);
          ctx.lineTo(15, -60);
          ctx.stroke();

          ctx.fillStyle = '#f8fafc';
          ctx.beginPath();
          ctx.arc(-5, 55, 6, 0, 2*Math.PI);
          ctx.arc(4, 57, 7, 0, 2*Math.PI);
          ctx.fill();
          ctx.restore();
        } else if (currentReaction === 'iron-copper') {
          ctx.fillStyle = 'rgba(59, 130, 246, 0.4)';
          ctx.fillRect(W/2 - 58, 150, 116, 88);

          ctx.fillStyle = '#64748b'; // grey iron nail
          ctx.fillRect(W/2 - 5, 80, 10, 150); 
          ctx.fillRect(W/2 - 12, 80, 24, 6); 
          ctx.beginPath();
          ctx.moveTo(W/2 - 5, 230);
          ctx.lineTo(W/2, 238);
          ctx.lineTo(W/2 + 5, 230);
          ctx.fill();
        } else if (currentReaction === 'barium-sodium') {
          ctx.save();
          ctx.translate(W/2 - 70, 70);
          ctx.rotate(Math.PI/6);
          ctx.strokeStyle = '#cbd5e1';
          ctx.lineWidth = 2;
          ctx.strokeRect(-10, -50, 20, 80);
          ctx.fillStyle = 'rgba(255,255,255,0.4)';
          ctx.fillRect(-8, -10, 16, 40);
          ctx.restore();

          ctx.save();
          ctx.translate(W/2 + 70, 70);
          ctx.rotate(-Math.PI/6);
          ctx.strokeStyle = '#cbd5e1';
          ctx.lineWidth = 2;
          ctx.strokeRect(-10, -50, 20, 80);
          ctx.fillStyle = 'rgba(255,255,255,0.4)';
          ctx.fillRect(-8, -10, 16, 40);
          ctx.restore();
        } else if (currentReaction === 'copper-oxidation') {
          // Tripod stand
          ctx.fillStyle = '#475569';
          ctx.fillRect(W/2 - 10, 180, 20, 60);
          ctx.fillRect(W/2 - 30, 230, 60, 10);
          
          ctx.strokeStyle = '#94a3b8';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(W/2 - 50, 240); ctx.lineTo(W/2 - 30, 160);
          ctx.moveTo(W/2 + 50, 240); ctx.lineTo(W/2 + 30, 160);
          ctx.moveTo(W/2 - 40, 160); ctx.lineTo(W/2 + 40, 160);
          ctx.stroke();

          // Curved Watch Glass
          ctx.fillStyle = 'rgba(241, 245, 249, 0.7)';
          ctx.beginPath();
          ctx.arc(W/2, 110, 45, 0.2*Math.PI, 0.8*Math.PI, false);
          ctx.lineTo(W/2 - 36, 155);
          ctx.fill();
          ctx.strokeStyle = '#cbd5e1';
          ctx.lineWidth = 2;
          ctx.stroke();

          // Solid Copper Piece (if not reacted completely)
          if (frame < 120) {
             ctx.fillStyle = '#b45309'; // shiny brown
             ctx.fillRect(W/2 - 15, 142, 30, 10);
          }
        } else if (currentReaction === 'feso4-thermal') {
          // Test tube with green FeSO4 crystals on a stand
          ctx.strokeStyle = 'var(--border-color)';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(W/2 - 12, 60); ctx.lineTo(W/2 - 12, 180);
          ctx.arc(W/2, 180, 12, Math.PI, 0, true);
          ctx.lineTo(W/2 + 12, 60); ctx.stroke();
          ctx.fillStyle = '#22c55e';
          ctx.fillRect(W/2 - 10, 140, 20, 42);
          ctx.fillStyle = '#64748b';
          ctx.fillRect(W/2 + 30, 30, 4, 220);
          ctx.fillRect(W/2 + 20, 240, 24, 6);
          ctx.fillRect(W/2 + 12, 80, 20, 4);
          ctx.fillStyle = '#475569';
          ctx.fillRect(W/2 - 15, 200, 30, 40);
          ctx.fillRect(W/2 - 25, 235, 50, 8);
        } else if (currentReaction === 'agcl-photo') {
          ctx.fillStyle = '#f1f5f9';
          ctx.beginPath();
          ctx.ellipse(W/2, 160, 50, 12, 0, 0, Math.PI);
          ctx.fill();
          ctx.strokeStyle = '#cbd5e1'; ctx.lineWidth = 2; ctx.stroke();
          ctx.fillStyle = '#f8fafc';
          for (let i = 0; i < 30; i++) {
            ctx.beginPath();
            ctx.arc(W/2 - 35 + (i * 7 % 70), 155 + (i * 3 % 8), 3, 0, 2*Math.PI);
            ctx.fill();
          }
          ctx.fillStyle = '#fbbf24';
          ctx.beginPath(); ctx.arc(W/2, 60, 20, 0, 2*Math.PI); ctx.fill();
          ctx.strokeStyle = '#f59e0b'; ctx.lineWidth = 2;
          for (let i = 0; i < 8; i++) {
            const a = (i * Math.PI) / 4;
            ctx.beginPath();
            ctx.moveTo(W/2 + Math.cos(a)*24, 60 + Math.sin(a)*24);
            ctx.lineTo(W/2 + Math.cos(a)*34, 60 + Math.sin(a)*34);
            ctx.stroke();
          }
          ctx.fillStyle = 'var(--text-muted)'; ctx.font = 'bold 11px system-ui';
          ctx.fillText('AgCl (White)', W/2 - 30, 185);
        } else if (currentReaction === 'redox-cuo') {
          ctx.strokeStyle = 'var(--border-color)'; ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(W/2 - 80, 130); ctx.lineTo(W/2 + 80, 130);
          ctx.lineTo(W/2 + 80, 150); ctx.lineTo(W/2 - 80, 150);
          ctx.closePath(); ctx.stroke();
          ctx.fillStyle = '#1e293b';
          ctx.fillRect(W/2 - 20, 132, 40, 16);
          ctx.fillStyle = 'var(--text-muted)'; ctx.font = 'bold 10px system-ui';
          ctx.fillText('H\u2082 gas \u2192', W/2 - 120, 144);
          ctx.fillStyle = '#475569';
          ctx.fillRect(W/2 - 10, 160, 20, 40);
          ctx.fillRect(W/2 - 20, 195, 40, 8);
          ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(W/2 + 80, 140); ctx.lineTo(W/2 + 110, 160);
          ctx.lineTo(W/2 + 110, 220); ctx.stroke();
          ctx.fillStyle = 'var(--text-muted)'; ctx.font = '9px system-ui';
          ctx.fillText('Water drops', W/2 + 90, 235);
        } else if (currentReaction === 'mg-combustion') {
          ctx.fillStyle = '#64748b';
          ctx.fillRect(W/2 - 70, 120, 60, 4);
          ctx.fillRect(W/2 - 70, 130, 60, 4);
          ctx.beginPath(); ctx.arc(W/2 - 70, 127, 6, 0, 2*Math.PI); ctx.fill();
          ctx.fillRect(W/2 - 120, 120, 50, 4);
          ctx.fillRect(W/2 - 120, 130, 50, 4);
          ctx.fillStyle = '#e2e8f0'; ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 1;
          ctx.fillRect(W/2 - 10, 115, 4, 25);
          ctx.strokeRect(W/2 - 10, 115, 4, 25);
          ctx.fillStyle = 'var(--text-muted)'; ctx.font = 'bold 10px system-ui';
          ctx.fillText('Mg Ribbon', W/2 + 5, 110);
          ctx.fillStyle = '#475569';
          ctx.fillRect(W/2 - 15, 155, 30, 50);
          ctx.fillRect(W/2 - 25, 200, 50, 8);
        }
      }


      function runSimulation() {
        if (timerId) clearInterval(timerId);
        reactionActive = true;
        if (currentReaction !== 'electrolysis' || frame === 0) {
          frame = 0;
        }
        obsPanel.innerHTML = '<strong>Running Reaction...</strong>';

        timerId = setInterval(() => {
          frame++;
          const W = canvas.width;
          const H = canvas.height;
          ctx.clearRect(0, 0, W, H);
          drawDefault();

          if (currentReaction === 'slaking') {
            // Draw Water turning milky
            const milkyAlpha = Math.min(0.8, frame * 0.015);
            ctx.fillStyle = `rgba(59, 130, 246, ${0.25 - milkyAlpha/4})`;
            ctx.fillRect(W/2 - 58, 150, 116, 88);
            if (milkyAlpha > 0) {
              ctx.fillStyle = `rgba(241, 245, 249, ${milkyAlpha})`; // milky white
              ctx.fillRect(W/2 - 58, 150, 116, 88);
            }

            // Draw tipped spoon
            ctx.save();
            ctx.translate(W/2 - 60, 75);
            const tipAngle = Math.min(60, frame * 4);
            ctx.rotate((tipAngle * Math.PI) / 180);
            
            ctx.fillStyle = '#cbd5e1'; 
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.quadraticCurveTo(50, 10, 80, 0);
            ctx.lineTo(85, 3);
            ctx.quadraticCurveTo(50, 20, -5, 5);
            ctx.fill();
            ctx.fillStyle = '#94a3b8';
            ctx.fillRect(-60, 0, 60, 4);
            
            // CaO pieces stuck to spoon briefly before falling
            if (frame < 10) {
              ctx.fillStyle = '#f8fafc';
              ctx.beginPath();
              ctx.arc(40, 0, 8, 0, 2*Math.PI);
              ctx.arc(55, 1, 10, 0, 2*Math.PI);
              ctx.arc(70, 0, 7, 0, 2*Math.PI);
              ctx.fill();
              ctx.strokeStyle = '#cbd5e1';
              ctx.stroke();
            }
            ctx.restore();

            // Draw dropping CaO particles
            const dropY1 = Math.min(230, 80 + (frame > 10 ? (frame - 10) * 6 : 0));
            const dropY2 = Math.min(232, 60 + (frame > 10 ? (frame - 10) * 7 : 0));
            const dropY3 = Math.min(228, 70 + (frame > 10 ? (frame - 10) * 5.5 : 0));
            
            const dissolveScale = Math.max(0, 1 - (frame > 35 ? (frame - 35) * 0.015 : 0));
            
            if (dissolveScale > 0 && frame >= 10) {
              ctx.save();
              ctx.globalAlpha = dissolveScale;
              ctx.fillStyle = '#cbd5e1';
              ctx.beginPath();
              ctx.arc(W/2 - 30, dropY1, 10 * dissolveScale, 0, 2*Math.PI);
              ctx.arc(W/2 - 10, dropY2, 12 * dissolveScale, 0, 2*Math.PI);
              ctx.arc(W/2 + 10, dropY3, 9 * dissolveScale, 0, 2*Math.PI);
              ctx.fill();
              ctx.restore();
            }

            // Thermometer Animated (Inside beaker)
            const tempVal = Math.min(95, 25 + (frame > 20 ? (frame - 20) * 0.5 : 0));
            const mercuryH = ((tempVal - 25) / 70) * 90;

            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.fillRect(W/2 + 30, 110, 12, 120);
            ctx.beginPath();
            ctx.arc(W/2 + 36, 235, 12, 0, 2*Math.PI);
            ctx.fill();
            ctx.strokeStyle = '#94a3b8';
            ctx.strokeRect(W/2 + 30, 110, 12, 120);
            ctx.stroke();

            ctx.fillStyle = '#ef4444';
            ctx.fillRect(W/2 + 33, 230 - mercuryH, 6, mercuryH + 5);
            ctx.beginPath();
            ctx.arc(W/2 + 36, 235, 9, 0, 2*Math.PI);
            ctx.fill();

            ctx.fillStyle = '#ef4444';
            ctx.font = 'bold 12px system-ui';
            ctx.fillText(`${tempVal.toFixed(0)}°C`, W/2 + 48, 230 - mercuryH);

            // Heat waves
            if (frame > 20) {
              ctx.strokeStyle = 'rgba(239, 68, 68, 0.6)';
              ctx.lineWidth = 3;
              for (let i = 0; i < 4; i++) {
                const sX = W/2 - 40 + i * 25 + Math.sin(frame * 0.2 + i) * 4;
                const sY = 140 - ((frame - 20) * 2.5) % 80;
                ctx.beginPath();
                ctx.moveTo(sX, sY);
                ctx.quadraticCurveTo(sX + 8, sY - 12, sX - 4, sY - 24);
                ctx.stroke();
              }
            }

            obsPanel.innerHTML = `<strong>Observations:</strong><br>
              • CaO particles drop into the water and dissolve.<br>
              • Thermometer shoots up to <strong>${tempVal.toFixed(0)}°C</strong> (highly exothermic).<br>
              • Solution turns milky white (Slaked lime Ca(OH)₂).<br>
              <code>CaO(s) + H₂O(l) → Ca(OH)₂(aq) + Heat ↑</code>`;

            if (frame > 180) {
              clearInterval(timerId);
              reactionActive = false;
            }
          } else if (currentReaction === 'electrolysis') {
            const hGasHeight = Math.min(125, frame * 0.1);
            const oGasHeight = hGasHeight / 2;

            ctx.fillStyle = 'var(--bg-primary)';
            ctx.fillRect(W/2 - 31, 101, 22, hGasHeight);
            
            ctx.fillStyle = 'var(--bg-primary)';
            ctx.fillRect(W/2 + 9, 101, 22, oGasHeight);

            // Larger bubbles
            ctx.fillStyle = 'rgba(147, 197, 253, 0.8)';
            for (let i = 0; i < 12; i++) {
              const bY = 230 - ((frame * 2 + i * 20) % (130 - hGasHeight));
              if (bY > 100 + hGasHeight) {
                ctx.beginPath();
                ctx.arc(W/2 - 20, bY, 4, 0, 2*Math.PI);
                ctx.fill();
              }
            }

            for (let i = 0; i < 8; i++) {
              const bY = 230 - ((frame * 1 + i * 25) % (130 - oGasHeight));
              if (bY > 100 + oGasHeight) {
                ctx.beginPath();
                ctx.arc(W/2 + 20, bY, 3.5, 0, 2*Math.PI);
                ctx.fill();
              }
            }

            ctx.fillStyle = 'var(--accent-color)';
            ctx.font = 'bold 10px system-ui';
            ctx.fillText(`H₂ (${(hGasHeight * 0.15).toFixed(1)}ml)`, W/2 - 40, 95);
            ctx.fillText(`O₂ (${(oGasHeight * 0.15).toFixed(1)}ml)`, W/2 + 5, 95);

            obsPanel.innerHTML = `<strong>Power ON. Running Electrolysis...</strong><br>
              • Bubbles rise at both electrodes.<br>
              • Hydrogen volume is exactly <strong>2x</strong> the volume of Oxygen.<br>
              • Water level in beaker decreases as it converts to gas.<br>
              <code>2H₂O(l) + Electricity → 2H₂(g)↑ [Cathode] + O₂(g)↑ [Anode]</code>`;

            // No hard stop unless water evaporates completely
            if (hGasHeight >= 125) {
              clearInterval(timerId);
              reactionActive = false;
              btnRun.textContent = 'Turn Power ON 🔋';
              obsPanel.innerHTML += "<br><strong>Process complete. (Water evaporated)</strong>";
            }
          } else if (currentReaction === 'lead-nitrate') {
            ctx.fillStyle = '#f97316';
            ctx.beginPath();
            ctx.moveTo(W/2 + 22, H/2 + 50);
            ctx.quadraticCurveTo(W/2 + 35, H/2 + 10, W/2 + 48, H/2 + 50);
            ctx.fill();
            
            ctx.fillStyle = '#eab308';
            ctx.beginPath();
            ctx.moveTo(W/2 + 27, H/2 + 50);
            ctx.quadraticCurveTo(W/2 + 35, H/2 + 22, W/2 + 43, H/2 + 50);
            ctx.fill();

            ctx.save();
            ctx.translate(W/2, H/2);
            ctx.rotate((-30 * Math.PI) / 180);
            
            ctx.strokeStyle = 'var(--border-color)';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(-15, -60);
            ctx.lineTo(-15, 60);
            ctx.arc(0, 60, 15, Math.PI, 0, true);
            ctx.lineTo(15, -60);
            ctx.stroke();

            ctx.fillStyle = frame > 25 ? '#fbbf24' : '#f8fafc';
            ctx.beginPath();
            ctx.arc(-5, 55, 6, 0, 2*Math.PI);
            ctx.arc(4, 57, 7, 0, 2*Math.PI);
            ctx.fill();

            if (frame > 15) {
              ctx.fillStyle = 'rgba(180, 83, 9, 0.45)';
              for (let i = 0; i < 4; i++) {
                const fX = -10 + i * 8 + Math.sin(frame * 0.3 + i) * 3;
                const fY = 30 - (frame - 15) * 3;
                if (fY > -120) {
                  ctx.beginPath();
                  ctx.arc(fX, fY, 6 + (frame % 3), 0, 2*Math.PI);
                  ctx.fill();
                }
              }
              ctx.fillStyle = 'rgba(180, 83, 9, 0.8)';
              ctx.font = 'bold 8px system-ui';
              ctx.fillText("NO₂ Fumes", -25, -20);
            }
            ctx.restore();

            obsPanel.innerHTML = `<strong>Observations:</strong><br>
              • White powder decomposes into yellow Lead Oxide (PbO).<br>
              • Brown fumes of toxic Nitrogen Dioxide (NO₂) gas escape.<br>
              <code>2Pb(NO₃)₂(s) + Heat → 2PbO(s) + 4NO₂(g)↑ + O₂(g)↑</code>`;

            if (frame > 65) {
              clearInterval(timerId);
              reactionActive = false;
            }
          } else if (currentReaction === 'iron-copper') {
            const blueAlpha = Math.max(0.05, 0.4 - frame * 0.005);
            const greenAlpha = Math.min(0.35, frame * 0.005);
            
            ctx.fillStyle = `rgba(59, 130, 246, ${blueAlpha})`;
            ctx.fillRect(W/2 - 58, 150, 116, 88);
            ctx.fillStyle = `rgba(132, 204, 22, ${greenAlpha})`;
            ctx.fillRect(W/2 - 58, 150, 116, 88);

            ctx.fillStyle = '#64748b';
            ctx.fillRect(W/2 - 5, 80, 10, 150); 
            ctx.fillRect(W/2 - 12, 80, 24, 6); 
            ctx.beginPath();
            ctx.moveTo(W/2 - 5, 230);
            ctx.lineTo(W/2, 238);
            ctx.lineTo(W/2 + 5, 230);
            ctx.fill();
            
            const cuAlpha = Math.min(0.8, frame * 0.01);
            ctx.fillStyle = `rgba(180, 83, 9, ${cuAlpha})`;
            ctx.fillRect(W/2 - 6, 150, 12, 80);
            ctx.beginPath();
            ctx.moveTo(W/2 - 6, 230);
            ctx.lineTo(W/2, 239);
            ctx.lineTo(W/2 + 6, 230);
            ctx.fill();

            obsPanel.innerHTML = `<strong>Observations:</strong><br>
              • The blue color of CuSO₄ solution fades to pale green (FeSO₄).<br>
              • A brown coating of Copper deposits on the iron nail.<br>
              <code>Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s)</code>`;

            if (frame > 80) {
              clearInterval(timerId);
              reactionActive = false;
            }
          } else if (currentReaction === 'barium-sodium') {
            if (frame < 20) {
              ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
              ctx.fillRect(W/2 - 40, 100, 8, 140);
              ctx.fillRect(W/2 + 32, 100, 8, 140);
            }

            const fillH = Math.min(88, frame * 4.4);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.fillRect(W/2 - 58, 240 - fillH, 116, fillH);

            if (frame > 5) {
              ctx.fillStyle = 'rgba(241, 245, 249, 0.9)';
              for(let i=0; i < Math.min(50, frame * 2); i++) {
                const px = W/2 - 50 + (i * 13 % 100);
                const py = Math.min(235, 240 - fillH + (i * 7 % fillH) + (frame > 20 ? (frame - 20) : 0));
                ctx.beginPath();
                ctx.arc(px, py, 2, 0, 2*Math.PI);
                ctx.fill();
              }
              if (frame > 30) {
                const pptHeight = Math.min(15, (frame - 30) * 0.5);
                ctx.fillRect(W/2 - 58, 240 - pptHeight, 116, pptHeight);
              }
            }

            obsPanel.innerHTML = `<strong>Observations:</strong><br>
              • Two clear solutions mix.<br>
              • An insoluble white precipitate of Barium Sulphate (BaSO₄) forms instantly.<br>
              <code>Na₂SO₄(aq) + BaCl₂(aq) → BaSO₄(s)↓ + 2NaCl(aq)</code>`;

            if (frame > 60) {
              clearInterval(timerId);
              reactionActive = false;
            }
          } else if (currentReaction === 'copper-oxidation') {
            // Draw Heat Flame
            ctx.fillStyle = 'rgba(59, 130, 246, 0.7)'; 
            ctx.beginPath();
            ctx.moveTo(W/2 - 8, 180);
            ctx.quadraticCurveTo(W/2, 155 - Math.random()*5, W/2 + 8, 180);
            ctx.fill();
            ctx.fillStyle = 'rgba(250, 204, 21, 0.4)';
            ctx.beginPath();
            ctx.moveTo(W/2 - 12, 180);
            ctx.quadraticCurveTo(W/2, 140 - Math.random()*10, W/2 + 12, 180);
            ctx.fill();

            // Black CuO powder dispersion
            const powderProgress = Math.min(1.0, frame * 0.008);
            ctx.fillStyle = '#0f172a'; // black
            
            // Draw scattered powder based on progress
            if (frame > 10) {
              for(let i=0; i < Math.min(150, frame * 2); i++) {
                 // Random positions within watch glass bounds
                 const px = W/2 - 25 + (i * 27 % 50);
                 const py = 145 + (i * 11 % 10);
                 // Only draw powder if it has dispersed beyond the initial solid block
                 ctx.beginPath();
                 ctx.arc(px, py, 1.5, 0, 2*Math.PI);
                 ctx.fill();
              }
            }
            
            // Draw original copper fading away
            if (powderProgress < 1.0) {
              ctx.fillStyle = `rgba(180, 83, 9, ${1.0 - powderProgress})`;
              ctx.fillRect(W/2 - 15, 142, 30, 10);
            }
            
            if (frame < 80 && frame % 2 === 0) {
               ctx.fillStyle = '#ef4444';
               ctx.font = '10px system-ui';
               ctx.fillText("O₂", W/2 - 30 + Math.random()*60, 110 + Math.random()*20);
            }

            obsPanel.innerHTML = `<strong>Observations:</strong><br>
              • The solid, shiny brown copper piece oxidizes and disperses into a black powder (Copper(II) Oxide).<br>
              • This is an oxidation reaction because Oxygen is added to Copper.<br>
              <code>2Cu(s) + O₂(g) + Heat → 2CuO(s)</code>`;

            if (frame > 150) {
              clearInterval(timerId);
              reactionActive = false;
            }
          } else if (currentReaction === 'feso4-thermal') {
            // Flame under test tube
            ctx.fillStyle = 'rgba(59, 130, 246, 0.7)';
            ctx.beginPath();
            ctx.moveTo(W/2 - 6, 200);
            ctx.quadraticCurveTo(W/2, 185 - Math.random()*5, W/2 + 6, 200);
            ctx.fill();
            ctx.fillStyle = 'rgba(250, 204, 21, 0.4)';
            ctx.beginPath();
            ctx.moveTo(W/2 - 10, 200);
            ctx.quadraticCurveTo(W/2, 175 - Math.random()*8, W/2 + 10, 200);
            ctx.fill();

            // Color change: green -> reddish brown (Fe2O3)
            const colorProgress = Math.min(1.0, frame * 0.012);
            const r = Math.round(34 + colorProgress * (153 - 34));
            const g = Math.round(197 + colorProgress * (27 - 197));
            const b = Math.round(94 + colorProgress * (27 - 94));
            ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
            ctx.fillRect(W/2 - 10, 140, 20, 42);

            // Yellow-brown fumes rising
            if (frame > 15) {
              ctx.fillStyle = 'rgba(180, 83, 9, 0.5)';
              for (let i = 0; i < 5; i++) {
                const fX = W/2 - 8 + (i * 5) + Math.sin(frame * 0.3 + i) * 3;
                const fY = 55 - ((frame - 15 + i * 8) % 50);
                ctx.beginPath();
                ctx.arc(fX, fY, 4 + Math.sin(frame * 0.1 + i) * 2, 0, 2*Math.PI);
                ctx.fill();
              }
              ctx.fillStyle = 'rgba(180, 83, 9, 0.8)';
              ctx.font = 'bold 8px system-ui';
              ctx.fillText('SO\u2082 + SO\u2083 fumes', W/2 - 40, 15);
            }

            // Smell/pungent icon
            if (frame > 30) {
              ctx.fillStyle = '#ef4444';
              ctx.font = 'bold 9px system-ui';
              ctx.fillText('\u26A0 Pungent smell!', W/2 + 40, 50);
            }

            obsPanel.innerHTML = `<strong>Observations:</strong><br>
              \u2022 Green FeSO\u2084 crystals change to <strong>reddish-brown</strong> Fe\u2082O\u2083.<br>
              \u2022 A gas with a <strong>characteristic pungent smell</strong> (SO\u2082) is released.<br>
              \u2022 This is <strong>Thermal Decomposition</strong> (breaking down by heat).<br>
              <code>2FeSO\u2084(s) \u2192 Fe\u2082O\u2083(s) + SO\u2082(g)\u2191 + SO\u2083(g)\u2191</code>`;

            if (frame > 120) {
              clearInterval(timerId);
              reactionActive = false;
            }
          } else if (currentReaction === 'agcl-photo') {
            // Sun rays hitting the powder - animate darkening
            const darkProgress = Math.min(1.0, frame * 0.01);
            
            // Draw sun rays reaching the powder
            ctx.strokeStyle = `rgba(251, 191, 36, ${0.6 - darkProgress * 0.3})`;
            ctx.lineWidth = 1;
            for (let i = 0; i < 6; i++) {
              const startX = W/2 - 20 + i * 8;
              ctx.beginPath();
              ctx.moveTo(startX, 80);
              ctx.lineTo(W/2 - 35 + i * 12, 150);
              ctx.stroke();
            }

            // Powder darkening from white to grey
            const grey = Math.round(248 - darkProgress * 180);
            ctx.fillStyle = `rgb(${grey}, ${grey}, ${grey})`;
            for (let i = 0; i < 30; i++) {
              ctx.beginPath();
              ctx.arc(W/2 - 35 + (i * 7 % 70), 155 + (i * 3 % 8), 3, 0, 2*Math.PI);
              ctx.fill();
            }

            // Silver specks appearing
            if (frame > 40) {
              ctx.fillStyle = '#94a3b8';
              for (let i = 0; i < Math.min(15, (frame - 40) / 3); i++) {
                ctx.beginPath();
                ctx.arc(W/2 - 30 + (i * 11 % 60), 154 + (i * 5 % 9), 2, 0, 2*Math.PI);
                ctx.fill();
              }
            }

            // Cl2 gas rising
            if (frame > 20) {
              ctx.fillStyle = 'rgba(134, 239, 172, 0.5)';
              for (let i = 0; i < 4; i++) {
                const gX = W/2 - 15 + i * 10 + Math.sin(frame * 0.2 + i) * 3;
                const gY = 140 - ((frame - 20 + i * 10) % 80);
                ctx.beginPath();
                ctx.arc(gX, gY, 3, 0, 2*Math.PI);
                ctx.fill();
              }
              ctx.fillStyle = 'rgba(34, 197, 94, 0.8)';
              ctx.font = 'bold 8px system-ui';
              ctx.fillText('Cl\u2082 gas \u2191', W/2 + 30, 100);
            }

            obsPanel.innerHTML = `<strong>Observations:</strong><br>
              \u2022 White AgCl powder turns <strong>grey</strong> when exposed to sunlight.<br>
              \u2022 Silver (Ag) deposits and greenish Chlorine gas (Cl\u2082) is released.<br>
              \u2022 This is <strong>Photochemical Decomposition</strong> (decomposition by light).<br>
              <code>2AgCl(s) \u2192[Sunlight] 2Ag(s) + Cl\u2082(g)\u2191</code>`;

            if (frame > 120) {
              clearInterval(timerId);
              reactionActive = false;
            }
          } else if (currentReaction === 'redox-cuo') {
            // Flame under tube
            ctx.fillStyle = 'rgba(59, 130, 246, 0.7)';
            ctx.beginPath();
            ctx.moveTo(W/2 - 6, 160);
            ctx.quadraticCurveTo(W/2, 145 - Math.random()*5, W/2 + 6, 160);
            ctx.fill();

            // H2 flow arrows
            ctx.fillStyle = 'rgba(147, 197, 253, 0.6)';
            for (let i = 0; i < 5; i++) {
              const ax = W/2 - 75 + ((frame * 3 + i * 15) % 80);
              ctx.beginPath();
              ctx.moveTo(ax, 138); ctx.lineTo(ax + 5, 140); ctx.lineTo(ax, 142);
              ctx.fill();
            }

            // CuO changing color: black -> reddish-brown (Cu)
            const cuProgress = Math.min(1.0, frame * 0.01);
            const cr = Math.round(30 + cuProgress * (180 - 30));
            const cg = Math.round(41 + cuProgress * (83 - 41));
            const cb = Math.round(59 + cuProgress * (9 - 59));
            ctx.fillStyle = `rgb(${cr}, ${cg}, ${cb})`;
            ctx.fillRect(W/2 - 20, 132, 40, 16);

            // Water droplets forming at delivery end
            if (frame > 30) {
              ctx.fillStyle = 'rgba(59, 130, 246, 0.6)';
              const dropCount = Math.min(8, (frame - 30) / 8);
              for (let i = 0; i < dropCount; i++) {
                ctx.beginPath();
                ctx.arc(W/2 + 110, 200 + i * 4, 2.5, 0, 2*Math.PI);
                ctx.fill();
              }
            }

            obsPanel.innerHTML = `<strong>Observations:</strong><br>
              \u2022 Black CuO turns <strong>reddish-brown</strong> (pure Copper is deposited).<br>
              \u2022 Water droplets form at the delivery tube end.<br>
              \u2022 CuO is <strong>reduced</strong> (loses O). H\u2082 is <strong>oxidized</strong> (gains O). This is a <strong>Redox</strong> reaction.<br>
              <code>CuO(s) + H\u2082(g) \u2192 Cu(s) + H\u2082O(l)</code>`;

            if (frame > 120) {
              clearInterval(timerId);
              reactionActive = false;
            }
          } else if (currentReaction === 'mg-combustion') {
            // Intense dazzling white flame
            const flameSize = 15 + Math.sin(frame * 0.3) * 5;
            
            // Outer glow
            const gradient = ctx.createRadialGradient(W/2 - 8, 110, 0, W/2 - 8, 110, flameSize * 2);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
            gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.5)');
            gradient.addColorStop(0.6, 'rgba(251, 191, 36, 0.2)');
            gradient.addColorStop(1, 'rgba(251, 191, 36, 0)');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(W/2 - 8, 110, flameSize * 2, 0, 2*Math.PI);
            ctx.fill();

            // Core white flame
            ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
            ctx.beginPath();
            ctx.arc(W/2 - 8, 110, flameSize * 0.6, 0, 2*Math.PI);
            ctx.fill();

            // Sparks
            ctx.fillStyle = '#fbbf24';
            for (let i = 0; i < 8; i++) {
              const sx = W/2 - 8 + Math.cos(frame * 0.5 + i) * (10 + frame * 0.3);
              const sy = 110 + Math.sin(frame * 0.5 + i) * (10 + frame * 0.3) - frame * 0.5;
              if (sy > 20) {
                ctx.beginPath();
                ctx.arc(sx, sy, 1.5, 0, 2*Math.PI);
                ctx.fill();
              }
            }

            // Mg ribbon shrinking
            const ribbonLen = Math.max(0, 25 - frame * 0.3);
            if (ribbonLen > 0) {
              ctx.fillStyle = '#e2e8f0';
              ctx.fillRect(W/2 - 10, 115, 4, ribbonLen);
            }

            // White MgO ash falling
            if (frame > 20) {
              ctx.fillStyle = '#f8fafc';
              const ashCount = Math.min(20, (frame - 20) / 3);
              for (let i = 0; i < ashCount; i++) {
                const ashX = W/2 - 15 + (i * 7 % 30);
                const ashY = 210 + (i * 3 % 8);
                ctx.beginPath();
                ctx.arc(ashX, ashY, 2, 0, 2*Math.PI);
                ctx.fill();
              }
            }

            // Warning label
            ctx.fillStyle = '#ef4444';
            ctx.font = 'bold 9px system-ui';
            ctx.fillText('\u26A0 DO NOT look directly!', W/2 + 25, 90);

            obsPanel.innerHTML = `<strong>Observations:</strong><br>
              \u2022 Magnesium burns with a <strong>dazzling white flame</strong>.<br>
              \u2022 A white powder (MgO - Magnesium Oxide) is formed as ash.<br>
              \u2022 This is a <strong>Combination reaction</strong> (Mg + O\u2082) and highly <strong>exothermic</strong>.<br>
              <code>2Mg(s) + O\u2082(g) \u2192 2MgO(s) + Heat + Light</code>`;

            if (frame > 100) {
              clearInterval(timerId);
              reactionActive = false;
            }
          }

        }, 40);
      }

      selReaction.addEventListener('change', () => {
        currentReaction = selReaction.value;
        if (currentReaction === 'electrolysis') {
          btnRun.textContent = reactionActive ? 'Turn Power OFF 🛑' : 'Turn Power ON 🔋';
        } else {
          btnRun.textContent = 'Run Reaction ⚡';
        }
        drawDefault();
        obsPanel.textContent = 'Select a reaction and click trigger to watch.';
      });

      btnRun.addEventListener('click', () => {
        if (currentReaction === 'electrolysis') {
          if (reactionActive) {
            clearInterval(timerId);
            reactionActive = false;
            btnRun.textContent = 'Turn Power ON 🔋';
            obsPanel.innerHTML = '<strong>Power OFF.</strong><br>Electrolysis paused.';
            drawDefault();
          } else {
            btnRun.textContent = 'Turn Power OFF 🛑';
            runSimulation();
          }
        } else {
          if (reactionActive) return;
          runSimulation();
        }
      });
      drawDefault();
    }

    function initNeutralizationTitrationLab() {
      const canvas = document.getElementById('neutralization-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const btnAcid = document.getElementById('btn-add-acid');
      const btnWater = document.getElementById('btn-add-water');
      const btnReset = document.getElementById('btn-reset-neutralization');
      const logPanel = document.getElementById('neutralization-log-panel');
      const badge = document.getElementById('neutralization-danger-badge');

      let mode = 'idle'; // 'idle', 'acid_to_water', 'water_to_acid'
      let frame = 0;
      let timerId = null;

      function drawBase(baseLiquid, addedLiquid) {
        const W = canvas.width;
        const H = canvas.height;
        ctx.clearRect(0, 0, W, H);
        
        // Beaker
        ctx.strokeStyle = '#cbd5e1';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(W/2 - 60, 150);
        ctx.lineTo(W/2 - 60, 280);
        ctx.lineTo(W/2 + 60, 280);
        ctx.lineTo(W/2 + 60, 150);
        ctx.stroke();

        // Base Liquid
        if (baseLiquid === 'water') {
          ctx.fillStyle = 'rgba(59, 130, 246, 0.3)';
        } else {
          ctx.fillStyle = 'rgba(250, 204, 21, 0.5)'; // yellowish for conc acid
        }
        ctx.fillRect(W/2 - 58, 200, 116, 78);

        // Thermometer
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fillRect(W/2 + 30, 120, 12, 160);
        ctx.beginPath();
        ctx.arc(W/2 + 36, 275, 12, 0, 2*Math.PI);
        ctx.fill();
        ctx.strokeStyle = '#94a3b8';
        ctx.strokeRect(W/2 + 30, 120, 12, 160);
        ctx.stroke();

        let tempVal = 25;
        let isExploding = false;
        
        if (mode === 'acid_to_water') {
          tempVal = Math.min(85, 25 + frame * 0.6);
        } else if (mode === 'water_to_acid') {
          tempVal = Math.min(120, 25 + frame * 4); // shoots up instantly
          if (frame > 15) isExploding = true;
        }

        const mercuryH = Math.min(145, ((tempVal - 25) / 95) * 145);
        
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(W/2 + 33, 270 - mercuryH, 6, mercuryH + 5);
        ctx.beginPath();
        ctx.arc(W/2 + 36, 275, 9, 0, 2*Math.PI);
        ctx.fill();

        ctx.fillStyle = '#ef4444';
        ctx.font = 'bold 12px system-ui';
        ctx.fillText(tempVal > 100 ? "MAX" : tempVal.toFixed(0) + "°C", W/2 + 48, 270 - mercuryH);

        // Dropper / Test tube
        ctx.save();
        ctx.translate(W/2 - 20, 100);
        const tilt = (mode !== 'idle' && frame < 50) ? Math.min(45, frame * 3) : 0;
        ctx.rotate((tilt * Math.PI)/180);
        
        ctx.strokeStyle = '#cbd5e1';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(-10, -60);
        ctx.lineTo(-10, 20);
        ctx.arc(0, 20, 10, Math.PI, 0, true);
        ctx.lineTo(10, -60);
        ctx.stroke();

        // Liquid in dropper
        ctx.fillStyle = (addedLiquid === 'acid') ? 'rgba(250, 204, 21, 0.7)' : 'rgba(59, 130, 246, 0.5)';
        ctx.beginPath();
        ctx.moveTo(-8, -20);
        ctx.lineTo(-8, 18);
        ctx.arc(0, 18, 8, Math.PI, 0, true);
        ctx.lineTo(8, -20);
        ctx.fill();
        ctx.restore();

        // Drops falling
        if (mode !== 'idle' && frame > 15 && frame < 60) {
          ctx.fillStyle = (addedLiquid === 'acid') ? 'rgba(250, 204, 21, 0.8)' : 'rgba(59, 130, 246, 0.8)';
          for(let i=0; i<3; i++) {
            const dropY = 130 + ((frame * 5 + i * 20) % 70);
            ctx.beginPath();
            ctx.arc(W/2 - 40 + i*5, dropY, 3, 0, 2*Math.PI);
            ctx.fill();
          }
        }

        // Explosion Splashes (Water to Acid)
        if (isExploding) {
          ctx.fillStyle = 'rgba(239, 68, 68, 0.7)'; // Red hot flashes
          ctx.beginPath();
          ctx.arc(W/2, 240, 40 + Math.random()*20, 0, 2*Math.PI);
          ctx.fill();

          ctx.fillStyle = 'rgba(250, 204, 21, 0.9)'; // Splashing acid
          for(let i=0; i<8; i++) {
            const sX = W/2 + (Math.random() - 0.5) * 150;
            const sY = 200 - Math.random() * 100;
            ctx.beginPath();
            ctx.arc(sX, sY, 3 + Math.random()*4, 0, 2*Math.PI);
            ctx.fill();
          }
        }
      }

      function runAnim(type) {
        if(timerId) clearInterval(timerId);
        frame = 0;
        mode = type;
        
        btnAcid.disabled = true;
        btnWater.disabled = true;

        if (type === 'acid_to_water') {
          badge.textContent = "SAFE";
          badge.style.background = "#22c55e";
          badge.style.color = "white";
          logPanel.innerHTML = "<strong>Correct Procedure:</strong> Adding acid slowly to water. The large volume of water dissipates the heat safely.";
        } else {
          badge.textContent = "DANGER!";
          badge.style.background = "#ef4444";
          badge.style.color = "white";
          logPanel.innerHTML = "<strong>INCORRECT PROCEDURE:</strong> Adding water to concentrated acid causes an immediate, violent exothermic reaction. The mixture boils instantly and splashes acid out of the container!";
        }

        timerId = setInterval(() => {
          frame++;
          if (type === 'acid_to_water') {
            drawBase('water', 'acid');
            if(frame > 120) {
              clearInterval(timerId);
              btnAcid.disabled = false;
              btnWater.disabled = false;
            }
          } else {
            drawBase('acid', 'water');
            if(frame > 60) {
              clearInterval(timerId);
              btnAcid.disabled = false;
              btnWater.disabled = false;
            }
          }
        }, 30);
      }

      btnAcid.addEventListener('click', () => runAnim('acid_to_water'));
      btnWater.addEventListener('click', () => runAnim('water_to_acid'));
      btnReset.addEventListener('click', () => {
        if(timerId) clearInterval(timerId);
        mode = 'idle';
        frame = 0;
        btnAcid.disabled = false;
        btnWater.disabled = false;
        badge.textContent = "SAFE";
        badge.style.background = "var(--bg-primary)";
        badge.style.color = "var(--text-normal)";
        logPanel.innerHTML = "Waiting to start dilution...";
        drawBase('water', 'acid');
      });

      // Initial Draw
      drawBase('water', 'acid');
    }

    function initConductivityCircuitLab() {
      const canvas = document.getElementById('conductivity-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const selMaterial = document.getElementById('sel-circuit-material');
      const btnTest = document.getElementById('btn-test-conductivity');
      const logPanel = document.getElementById('conductivity-log-panel');
      const badge = document.getElementById('conductivity-status-badge');

      let timerId = null;
      let frame = 0;
      let isTesting = false;

      function drawCircuit(material, testing) {
        const W = canvas.width;
        const H = canvas.height;
        ctx.clearRect(0, 0, W, H);

        // Battery (Top center)
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(W/2 - 40, 50, 80, 40);
        ctx.fillStyle = '#ef4444'; // positive terminal
        ctx.fillRect(W/2 + 40, 60, 10, 20);
        ctx.fillStyle = '#94a3b8'; // negative terminal
        ctx.fillRect(W/2 - 50, 60, 10, 20);
        ctx.fillStyle = 'white';
        ctx.font = 'bold 16px sans-serif';
        ctx.fillText("9V", W/2 - 10, 75);

        // Wires
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 4;
        ctx.beginPath();
        // Negative wire (left) -> down to gap
        ctx.moveTo(W/2 - 50, 70);
        ctx.lineTo(W/2 - 150, 70);
        ctx.lineTo(W/2 - 150, 220);
        ctx.lineTo(W/2 - 80, 220); // Left Crocodile clip position
        // Positive wire (right) -> down to Bulb
        ctx.moveTo(W/2 + 50, 70);
        ctx.lineTo(W/2 + 150, 70);
        ctx.lineTo(W/2 + 150, 180); // Bulb connection
        ctx.stroke();

        // Bulb
        ctx.beginPath();
        ctx.arc(W/2 + 150, 200, 20, 0, 2*Math.PI);
        ctx.fillStyle = (testing && (material === 'iron' || material === 'copper' || material === 'graphite')) ? '#fef08a' : '#f1f5f9';
        ctx.fill();
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Glow effect
        if (testing && (material === 'iron' || material === 'copper' || material === 'graphite')) {
          const glowAlpha = 0.5 + Math.sin(frame * 0.2) * 0.2;
          ctx.beginPath();
          ctx.arc(W/2 + 150, 200, 35, 0, 2*Math.PI);
          ctx.fillStyle = `rgba(253, 224, 71, ${glowAlpha})`;
          ctx.fill();
        }

        // Wire from Bulb to right clip
        ctx.beginPath();
        ctx.moveTo(W/2 + 150, 220);
        ctx.lineTo(W/2 + 150, 250);
        ctx.lineTo(W/2 + 80, 250); // Right Crocodile clip position
        ctx.stroke();

        // Left Clip (Black)
        ctx.fillStyle = '#1e293b';
        ctx.beginPath();
        ctx.moveTo(W/2 - 80, 215);
        ctx.lineTo(W/2 - 60, 220);
        ctx.lineTo(W/2 - 80, 225);
        ctx.fill();

        // Right Clip (Red)
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.moveTo(W/2 + 80, 245);
        ctx.lineTo(W/2 + 60, 250);
        ctx.lineTo(W/2 + 80, 255);
        ctx.fill();

        // Material in between clips
        if (material === 'iron') {
          ctx.fillStyle = '#64748b'; // grey nail
          ctx.fillRect(W/2 - 65, 230, 130, 8);
          ctx.beginPath();
          ctx.moveTo(W/2 + 65, 230);
          ctx.lineTo(W/2 + 80, 234);
          ctx.lineTo(W/2 + 65, 238);
          ctx.fill();
        } else if (material === 'copper') {
          ctx.fillStyle = '#b45309'; // bronze/orange wire
          ctx.fillRect(W/2 - 65, 232, 130, 4);
        } else if (material === 'coal') {
          ctx.fillStyle = '#0f172a'; // black jagged chunk
          ctx.beginPath();
          ctx.moveTo(W/2 - 50, 230);
          ctx.lineTo(W/2 - 20, 220);
          ctx.lineTo(W/2 + 20, 240);
          ctx.lineTo(W/2 + 50, 225);
          ctx.lineTo(W/2 + 40, 250);
          ctx.lineTo(W/2 - 40, 245);
          ctx.fill();
        } else if (material === 'sulphur') {
          ctx.fillStyle = '#fef08a'; // yellow powder mound
          ctx.beginPath();
          ctx.arc(W/2, 240, 25, 0, Math.PI, true);
          ctx.fill();
        } else if (material === 'graphite') {
          ctx.fillStyle = '#334155'; // dark grey rod
          ctx.fillRect(W/2 - 65, 232, 130, 6);
        }

        // Electron flow animation
        if (testing && (material === 'iron' || material === 'copper' || material === 'graphite')) {
          ctx.fillStyle = '#3b82f6';
          // Draw a few moving electrons along the path
          const path = [
            {x: W/2 - 50, y: 70}, {x: W/2 - 150, y: 70}, {x: W/2 - 150, y: 220}, {x: W/2 - 60, y: 220},
            {x: W/2 + 60, y: 250}, {x: W/2 + 150, y: 250}, {x: W/2 + 150, y: 220}, {x: W/2 + 150, y: 70}, {x: W/2 + 50, y: 70}
          ];
          
          // Very simplified electron representation
          for(let i=0; i<8; i++) {
             let pos = (frame * 2 + i * 50) % 800; // total path length approx 800
             let ex = 0, ey = 0;
             if (pos < 100) { ex = W/2 - 50 - pos; ey = 70; }
             else if (pos < 250) { ex = W/2 - 150; ey = 70 + (pos-100); }
             else if (pos < 340) { ex = W/2 - 150 + (pos-250); ey = 220 + ((pos-250)*0.1); } // bridge
             else if (pos < 470) { ex = W/2 - 60 + (pos-340); ey = 220 + ((pos-340)*0.25); } // bridge
             else if (pos < 560) { ex = W/2 + 60 + (pos-470); ey = 250; }
             else if (pos < 590) { ex = W/2 + 150; ey = 250 - (pos-560); }
             else if (pos < 740) { ex = W/2 + 150; ey = 220 - (pos-590); }
             else { ex = W/2 + 150 - (pos-740); ey = 70; }
             
             ctx.beginPath();
             ctx.arc(ex, ey, 4, 0, 2*Math.PI);
             ctx.fill();
          }
        }
      }

      btnTest.addEventListener('click', () => {
        if(timerId) clearInterval(timerId);
        const material = selMaterial.value;
        isTesting = true;
        frame = 0;
        
        let conducts = false;
        if (material === 'iron' || material === 'copper' || material === 'graphite') {
          conducts = true;
        }

        if (material === 'none') {
           badge.textContent = "CIRCUIT OPEN";
           badge.style.background = "var(--bg-primary)";
           badge.style.color = "var(--text-normal)";
           logPanel.innerHTML = "No material inserted. The circuit is incomplete.";
        } else if (conducts) {
           badge.textContent = "CONDUCTOR";
           badge.style.background = "#22c55e";
           badge.style.color = "white";
           let note = material === 'graphite' ? "(Exception: Graphite is a non-metal but conducts electricity due to free electrons in its structure)" : "(Metals are excellent conductors due to free electrons)";
           logPanel.innerHTML = `<strong>Current Flows!</strong> The bulb glows brightly. <br>${note}`;
        } else {
           badge.textContent = "INSULATOR";
           badge.style.background = "#ef4444";
           badge.style.color = "white";
           logPanel.innerHTML = "<strong>No Current!</strong> The bulb does not glow. Non-metals (like Coal or Sulphur) do not have free electrons to conduct electricity.";
        }

        timerId = setInterval(() => {
          frame++;
          drawCircuit(material, true);
        }, 30);
      });

      selMaterial.addEventListener('change', () => {
        if(timerId) clearInterval(timerId);
        isTesting = false;
        drawCircuit(selMaterial.value, false);
        badge.textContent = "CIRCUIT OPEN";
        badge.style.background = "var(--bg-primary)";
        badge.style.color = "var(--text-normal)";
        logPanel.innerHTML = "Select a material and test the circuit.";
      });

      // Initial Draw
      drawCircuit('none', false);
    }

    function initPhScaleLab() {
      const canvas = document.getElementById('ph-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const selSubstance = document.getElementById('sel-ph-substance');
      const logPanel = document.getElementById('ph-log-panel');

      const substances = {
        hcl: { name: '1M Hydrochloric Acid', pH: 0.0, color: '#dc2626', type: 'Strong Acid' },
        gastric: { name: 'Gastric Juice', pH: 1.2, color: '#ea580c', type: 'Acidic' },
        lemon: { name: 'Lemon Juice', pH: 2.2, color: '#f59e0b', type: 'Acidic' },
        tomato: { name: 'Tomato Juice', pH: 4.2, color: '#eab308', type: 'Weak Acid' },
        water: { name: 'Pure Water / Saliva', pH: 7.0, color: '#10b981', type: 'Neutral' },
        magnesia: { name: 'Milk of Magnesia', pH: 10.0, color: '#2563eb', type: 'Weak Base' },
        naoh: { name: '1M Sodium Hydroxide', pH: 14.0, color: '#4f46e5', type: 'Strong Base' }
      };

      let currentSubstanceKey = 'water';
      let activeProbe = 'universal';
      let paperY = 80;
      let isDraggingPaper = false;



      function draw() {
        const W = canvas.width;
        const H = canvas.height;
        ctx.clearRect(0, 0, W, H);

        const sub = substances[currentSubstanceKey];

        // Draw pH Scale Reference Bar (Universal Indicator Color Chart)
        const scaleX = 40;
        const scaleY = 30;
        const scaleW = 520;
        const scaleH = 15;
        const pHColors = [
          '#dc2626', '#ea580c', '#f59e0b', '#eab308', '#84cc16', '#22c55e', '#10b981',
          '#06b6d4', '#3b82f6', '#2563eb', '#1d4ed8', '#4f46e5', '#6366f1', '#7c3aed', '#6b21a8'
        ];
        
        ctx.fillStyle = 'var(--text-normal)';
        ctx.font = 'bold 10px system-ui';
        ctx.fillText("Universal pH Color Reference Scale:", scaleX, scaleY - 8);
        
        const blockW = scaleW / 15;
        for (let i = 0; i <= 14; i++) {
          ctx.fillStyle = pHColors[i];
          ctx.fillRect(scaleX + i * blockW, scaleY, blockW, scaleH);
          
          ctx.fillStyle = 'var(--text-muted)';
          ctx.font = '8px system-ui';
          ctx.fillText(i.toString(), scaleX + i * blockW + (blockW / 2) - 3, scaleY + scaleH + 11);
        }

        // Draw Beaker
        ctx.strokeStyle = 'var(--border-color)';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(W/2 - 80, 120);
        ctx.lineTo(W/2 - 80, 260);
        ctx.lineTo(W/2 + 80, 260);
        ctx.lineTo(W/2 + 80, 120);
        ctx.stroke();

        ctx.fillStyle = 'rgba(59, 130, 246, 0.15)';
        if (currentSubstanceKey === 'lemon' || currentSubstanceKey === 'tomato') {
          ctx.fillStyle = 'rgba(245, 158, 11, 0.2)';
        } else if (currentSubstanceKey === 'hcl' || currentSubstanceKey === 'gastric') {
          ctx.fillStyle = 'rgba(239, 68, 68, 0.15)';
        } else if (currentSubstanceKey === 'magnesia') {
          ctx.fillStyle = 'rgba(37, 99, 235, 0.15)';
        } else if (currentSubstanceKey === 'naoh') {
          ctx.fillStyle = 'rgba(79, 70, 229, 0.15)';
        }
        ctx.fillRect(W/2 - 76, 170, 152, 88);

        ctx.fillStyle = 'var(--text-normal)';
        ctx.font = 'bold 12px system-ui';
        ctx.fillText(sub.name, W/2 - 60, 220);

        const isDipped = paperY + 60 >= 170;

        ctx.save();
        ctx.translate(W/2 - 15, paperY);
        
        let stripColor = '#fef08a';
        if (activeProbe === 'litmus-blue') stripColor = '#60a5fa';
        else if (activeProbe === 'litmus-red') stripColor = '#fca5a5';
        else if (activeProbe === 'phenolphthalein') stripColor = 'rgba(255,255,255,0.7)';

        ctx.fillStyle = stripColor;
        ctx.fillRect(0, 0, 30, 80);
        ctx.strokeStyle = 'var(--text-muted)';
        ctx.lineWidth = 1;
        ctx.strokeRect(0, 0, 30, 80);

        if (isDipped) {
          let dippedColor = stripColor;
          if (activeProbe === 'universal') {
            dippedColor = sub.color;
          } else if (activeProbe === 'litmus-blue') {
            dippedColor = sub.pH < 7 ? '#ef4444' : '#3b82f6';
          } else if (activeProbe === 'litmus-red') {
            dippedColor = sub.pH > 7 ? '#3b82f6' : '#ef4444';
          } else if (activeProbe === 'phenolphthalein') {
            dippedColor = sub.pH > 7 ? '#ec4899' : 'rgba(255,255,255,0.7)';
          }
          
          const dippedHeight = Math.min(30, paperY + 80 - 170);
          ctx.fillStyle = dippedColor;
          ctx.fillRect(0, 80 - dippedHeight, 30, dippedHeight);
        }
        ctx.restore();

        if (isDipped) {
          logPanel.innerHTML = `<strong>Dipped Probe Analysis:</strong><br>
            • Solution: <strong>${sub.name}</strong><br>
            • pH Value: <strong style="color:${sub.color}; font-size:1.15rem;">${sub.pH.toFixed(1)}</strong><br>
            • Classification: <strong>${sub.type}</strong><br>
            • H⁺ Ion Concentration: <strong>10⁻${sub.pH.toFixed(1)} M</strong><br>
            • Probe Result: <strong>Active color change matches pH indicator scale.</strong>`;
        } else {
          logPanel.innerHTML = `<strong>Probe Status:</strong><br>
            <span style="color:var(--text-muted);">Drag the test paper strip downwards into the beaker solution to read values.</span>`;
        }
      }

      canvas.addEventListener('mousedown', (e) => {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        const mouseX = (e.clientX - rect.left) * scaleX;
        const mouseY = (e.clientY - rect.top) * scaleY;
        if (mouseX >= canvas.width/2 - 25 && mouseX <= canvas.width/2 + 25 && mouseY >= paperY && mouseY <= paperY + 80) {
          isDraggingPaper = true;
        }
      });

      canvas.addEventListener('mousemove', (e) => {
        if (isDraggingPaper) {
          const rect = canvas.getBoundingClientRect();
          const scaleY = canvas.height / rect.height;
          const mouseY = (e.clientY - rect.top) * scaleY;
          paperY = Math.max(30, Math.min(180, mouseY - 40));
          draw();
        }
      });

      window.addEventListener('mouseup', () => {
        isDraggingPaper = false;
      });

      canvas.addEventListener('touchstart', (e) => {
        if (e.touches.length === 0) return;
        const t = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        const mouseX = (t.clientX - rect.left) * scaleX;
        const mouseY = (t.clientY - rect.top) * scaleY;
        if (mouseX >= canvas.width/2 - 25 && mouseX <= canvas.width/2 + 25 && mouseY >= paperY && mouseY <= paperY + 80) {
          isDraggingPaper = true;
          e.preventDefault();
        }
      });

      canvas.addEventListener('touchmove', (e) => {
        if (isDraggingPaper && e.touches.length > 0) {
          const rect = canvas.getBoundingClientRect();
          const scaleY = canvas.height / rect.height;
          const mouseY = (e.touches[0].clientY - rect.top) * scaleY;
          paperY = Math.max(30, Math.min(180, mouseY - 40));
          draw();
          e.preventDefault();
        }
      });

      canvas.addEventListener('touchend', () => {
        isDraggingPaper = false;
      });

      selSubstance.addEventListener('change', () => {
        currentSubstanceKey = selSubstance.value;
        draw();
      });

      document.querySelectorAll('input[name="ph-probe"]').forEach(r => {
        r.addEventListener('change', () => {
          activeProbe = r.value;
          draw();
        });
      });

      const btnExport = document.getElementById('btn-export-ph');
      if (btnExport) {
        btnExport.addEventListener('click', () => {
          let csv = "Substance,pH,Classification,H+ Concentration (M)\n";
          Object.keys(substances).forEach(key => {
            const sub = substances[key];
            csv += `"${sub.name}",${sub.pH},"${sub.type}",10^-${sub.pH} M\n`;
          });
          const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = "pH_Scale_Lab_Report.csv";
          link.click();
        });
      }

      draw();
    }

    function initMetalReactivityLab() {
      const canvas = document.getElementById('metal-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const selMetal = document.getElementById('sel-metal-strip');
      const selSalt = document.getElementById('sel-salt-sol');
      const btnDrop = document.getElementById('btn-drop-metal');
      const logPanel = document.getElementById('metal-log-panel');

      let currentMetal = 'fe';
      let currentSalt = 'cuso4';
      let dipped = false;
      let animStripY = 20;
      let timeTick = 0;

      const reactivity = { zn: 4, fe: 3, cu: 2, ag: 1 };
      
      const saltLabels = {
        cuso4: { name: 'Copper Sulphate (CuSO₄)', color: '#3b82f6', activeColor: '#10b981', displacedColor: 'rgba(16, 185, 129, 0.25)', label: 'Blue solution' },
        feso4: { name: 'Iron Sulphate (FeSO₄)', color: '#a7f3d0', activeColor: '#fbbf24', displacedColor: 'rgba(251, 191, 36, 0.25)', label: 'Pale green solution' },
        znso4: { name: 'Zinc Sulphate (ZnSO₄)', color: '#f1f5f9', activeColor: '#f1f5f9', displacedColor: 'rgba(241, 245, 249, 0.25)', label: 'Colorless solution' },
        agno3: { name: 'Silver Nitrate (AgNO₃)', color: '#e2e8f0', activeColor: '#e2e8f0', displacedColor: 'rgba(226, 232, 240, 0.25)', label: 'Colorless solution' }
      };

      function animate() {
        if (!document.getElementById('metal-canvas')) return;
        requestAnimationFrame(animate);
        timeTick += 0.05;

        const W = canvas.width;
        const H = canvas.height;
        ctx.clearRect(0, 0, W, H);

        // Draw Wooden Rack base
        ctx.fillStyle = '#854d0e';
        ctx.fillRect(40, 240, 520, 15);
        ctx.fillRect(40, 160, 520, 10);
        // Rack Pillars
        ctx.fillRect(50, 100, 10, 140);
        ctx.fillRect(540, 100, 10, 140);

        const tubes = [
          { salt: 'cuso4', x: 140, name: 'CuSO₄', color: '#3b82f6', activeColor: '#10b981' },
          { salt: 'feso4', x: 240, name: 'FeSO₄', color: '#a7f3d0', activeColor: '#fbbf24' },
          { salt: 'znso4', x: 340, name: 'ZnSO₄', color: '#f1f5f9', activeColor: '#f1f5f9' },
          { salt: 'agno3', x: 440, name: 'AgNO₃', color: '#e2e8f0', activeColor: '#e2e8f0' }
        ];

        // Update animation variable safely regardless of active tube
        const targetY = dipped ? 130 : 20;
        animStripY += (targetY - animStripY) * 0.15;

        tubes.forEach(t => {
          const metalPower = reactivity[currentMetal];
          let saltMetalKey = 'cu';
          if (t.salt === 'feso4') saltMetalKey = 'fe';
          else if (t.salt === 'znso4') saltMetalKey = 'zn';
          else if (t.salt === 'agno3') saltMetalKey = 'ag';
          const saltMetalPower = reactivity[saltMetalKey];
          const reactionOccurs = metalPower > saltMetalPower;

          let liquidColor = t.color;
          if (dipped && currentSalt === t.salt && reactionOccurs && animStripY > 120) {
            liquidColor = t.activeColor;
          }

          // Liquid
          ctx.fillStyle = hexToRgba(liquidColor, 0.35);
          ctx.fillRect(t.x - 20, 150, 40, 85);

          // Glass outline
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
          if (document.documentElement.getAttribute('data-theme') === 'light') {
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.15)';
          }
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(t.x - 22, 100);
          ctx.lineTo(t.x - 22, 230);
          ctx.arc(t.x, 230, 22, Math.PI, 0, true);
          ctx.lineTo(t.x + 22, 100);
          ctx.stroke();

          // Label on tube
          ctx.fillStyle = 'var(--text-normal)';
          ctx.font = 'bold 9px system-ui';
          ctx.fillText(t.name, t.x - 16, 185);

          if (currentSalt === t.salt) {
            // Selected active tube arrow
            ctx.fillStyle = 'var(--secondary-color)';
            ctx.beginPath();
            ctx.moveTo(t.x, 75);
            ctx.lineTo(t.x - 6, 65);
            ctx.lineTo(t.x + 6, 65);
            ctx.closePath();
            ctx.fill();

            // Draw metal strip
            const stripY = animStripY;
            ctx.fillStyle = getMetalColor(currentMetal);
            ctx.fillRect(t.x - 8, stripY, 16, 75);
            ctx.strokeStyle = '#334155';
            ctx.lineWidth = 1;
            ctx.strokeRect(t.x - 8, stripY, 16, 75);

            ctx.fillStyle = (currentMetal === 'ag') ? '#1e293b' : 'white';
            ctx.font = 'bold 10px system-ui';
            ctx.fillText(currentMetal.toUpperCase(), t.x - 6, stripY + 25);

            if (dipped && reactionOccurs && stripY > 120) {
              // Deposit
              ctx.fillStyle = getDepositColor(saltMetalKey);
              ctx.fillRect(t.x - 9, 150, 18, 55);

              // Animated Bubbles
              ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
              for (let i = 0; i < 8; i++) {
                ctx.beginPath();
                const bX = t.x - 8 + (i * 2.5) + Math.sin(timeTick * 3 + i) * 2;
                const bY = 205 - ((timeTick * 35 + i * 15) % 60);
                ctx.arc(bX, bY, 1.5 + Math.sin(timeTick + i) * 0.5, 0, 2 * Math.PI);
                ctx.fill();
              }
            }
          }
        });
      }


      function getMetalColor(metal) {
        const colors = { fe: '#64748b', cu: '#b45309', zn: '#94a3b8', ag: '#cbd5e1' };
        return colors[metal] || '#6b7280';
      }

      function getDepositColor(displacedMetal) {
        const colors = { cu: '#78350f', fe: '#334155', zn: '#475569', ag: '#94a3b8' };
        return colors[displacedMetal] || '#475569';
      }

      function hexToRgba(hex, alpha) {
        if (hex.startsWith('rgba')) return hex;
        if (hex === '#3b82f6') return `rgba(59, 130, 246, ${alpha})`;
        if (hex === '#a7f3d0') return `rgba(167, 243, 208, ${alpha})`;
        if (hex === '#f1f5f9') return `rgba(241, 245, 249, ${alpha})`;
        if (hex === '#e2e8f0') return `rgba(226, 232, 240, ${alpha})`;
        if (hex === '#10b981') return `rgba(16, 185, 129, ${alpha})`;
        if (hex === '#fbbf24') return `rgba(251, 191, 36, ${alpha})`;
        return `rgba(100, 116, 139, ${alpha})`;
      }

      btnDrop.addEventListener('click', () => {
        dipped = !dipped;
        btnDrop.textContent = dipped ? 'Pull Metal Strip Out ⎗' : 'Dip Metal in Solution 🧪';
        
        const metalPower = reactivity[currentMetal];
        let saltMetalKey = 'cu';
        if (currentSalt === 'feso4') saltMetalKey = 'fe';
        else if (currentSalt === 'znso4') saltMetalKey = 'zn';
        else if (currentSalt === 'agno3') saltMetalKey = 'ag';
        const saltMetalPower = reactivity[saltMetalKey];
        const reactionOccurs = metalPower > saltMetalPower;

        if (dipped) {
          if (reactionOccurs) {
            logPanel.innerHTML = `<strong>Reaction Logs:</strong><br>
              • Metal ${currentMetal.toUpperCase()} is <strong>more reactive</strong> than ${saltMetalKey.toUpperCase()}.<br>
              • Displacement occurs! Solution color starts changing.<br>
              • Reddish/dark deposits forming on the strip.`;
          } else {
            logPanel.innerHTML = `<strong>Reaction Logs:</strong><br>
              • Metal ${currentMetal.toUpperCase()} is <strong>less reactive</strong> than ${saltMetalKey.toUpperCase()}.<br>
              • <strong style="color:#ef4444;">NO REACTION OCCURS</strong>.<br>
              • Solution remains unchanged.`;
          }
        } else {
          logPanel.textContent = 'Dip a metal into a solution to observe reactivity.';
        }
      });

      selMetal.addEventListener('change', () => {
        currentMetal = selMetal.value;
        dipped = false;
        btnDrop.textContent = 'Dip Metal in Solution 🧪';
        logPanel.textContent = 'Dip a metal into a solution to observe reactivity.';
      });

      selSalt.addEventListener('change', () => {
        currentSalt = selSalt.value;
        dipped = false;
        btnDrop.textContent = 'Dip Metal in Solution 🧪';
        logPanel.textContent = 'Dip a metal into a solution to observe reactivity.';
      });

      const btnExportMetal = document.getElementById('btn-export-metal');
      if (btnExportMetal) {
        btnExportMetal.addEventListener('click', () => {
          let csv = "Metal,Salt Solution,Reactivity Ratio (Metal vs Salt),Displacement Result\n";
          const metalsList = ['zn', 'fe', 'cu', 'ag'];
          const saltsList = [
            { key: 'cuso4', name: 'Copper Sulphate (CuSO4)', metal: 'cu' },
            { key: 'feso4', name: 'Iron Sulphate (FeSO4)', metal: 'fe' },
            { key: 'znso4', name: 'Zinc Sulphate (ZnSO4)', metal: 'zn' },
            { key: 'agno3', name: 'Silver Nitrate (AgNO3)', metal: 'ag' }
          ];
          metalsList.forEach(m => {
            saltsList.forEach(s => {
              const metalPower = reactivity[m];
              const saltMetalPower = reactivity[s.metal];
              const result = metalPower > saltMetalPower ? "Displacement Occurs" : "No Reaction";
              csv += `${m.toUpperCase()},"${s.name}",${metalPower} vs ${saltMetalPower},"${result}"\n`;
            });
          });
          const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = "Metal_Reactivity_Lab_Report.csv";
          link.click();
        });
      }

      animate();
    }

    function initRefractionLab() {
      const canvas = document.getElementById('refraction-canvas');
      const ctx = canvas.getContext('2d');
      const rngTheta1 = document.getElementById('rng-theta1');
      const selN1 = document.getElementById('sel-n1');
      const selN2 = document.getElementById('sel-n2');
      
      let theta1 = 45;
      let n1 = 1.0;
      let n2 = 1.5;
      let isDragging = false;

      function updateSimulation() {
        n1 = parseFloat(selN1.value);
        n2 = parseFloat(selN2.value);
        theta1 = parseInt(rngTheta1.value);
        
        document.getElementById('lbl-n1').textContent = `n₁ = ${n1.toFixed(2)}`;
        document.getElementById('lbl-n2').textContent = `n₂ = ${n2.toFixed(2)}`;
        document.getElementById('lbl-theta1').textContent = `${theta1}°`;

        const W = canvas.width;
        const H = canvas.height;
        const cx = W / 2;
        const cy = H / 2;

        ctx.clearRect(0, 0, W, H);

        ctx.fillStyle = n1 > 1.2 ? 'rgba(59, 130, 246, 0.08)' : '#0b0f19';
        if (document.documentElement.getAttribute('data-theme') === 'light') {
          ctx.fillStyle = n1 > 1.2 ? 'rgba(59, 130, 246, 0.12)' : '#f8fafc';
        }
        ctx.fillRect(0, 0, W, cy);

        ctx.fillStyle = n2 > 1.2 ? 'rgba(59, 130, 246, 0.18)' : '#111827';
        if (document.documentElement.getAttribute('data-theme') === 'light') {
          ctx.fillStyle = n2 > 1.2 ? 'rgba(59, 130, 246, 0.22)' : '#f1f5f9';
        }
        ctx.fillRect(0, cy, W, H - cy);

        ctx.strokeStyle = 'var(--border-color)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, cy);
        ctx.lineTo(W, cy);
        ctx.stroke();

        ctx.strokeStyle = 'rgba(148, 163, 184, 0.5)';
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(cx, 10);
        ctx.lineTo(cx, H - 10);
        ctx.stroke();
        ctx.setLineDash([]);

        const rTheta1 = (theta1 * Math.PI) / 180;
        const rayLen = 150;
        const rx = cx - rayLen * Math.sin(rTheta1);
        const ry = cy - rayLen * Math.cos(rTheta1);

        ctx.strokeStyle = '#eab308';
        ctx.lineWidth = 3.5;
        ctx.shadowColor = '#eab308';
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.moveTo(rx, ry);
        ctx.lineTo(cx, cy);
        ctx.stroke();
        ctx.shadowBlur = 0;

        ctx.fillStyle = '#ef4444';
        ctx.save();
        ctx.translate(rx, ry);
        ctx.rotate(rTheta1 + Math.PI/2);
        ctx.fillRect(-15, -8, 30, 16);
        ctx.fillStyle = '#374151';
        ctx.fillRect(15, -4, 5, 8);
        ctx.restore();

        const sinTheta1 = Math.sin(rTheta1);
        const sinTheta2 = (n1 * sinTheta1) / n2;
        
        const solverSteps = document.getElementById('refraction-solver-steps');
        const tirBadge = document.getElementById('tir-badge');

        if (sinTheta2 > 1.0) {
          tirBadge.style.display = 'inline-flex';
          const r1x = cx + rayLen * Math.sin(rTheta1);
          const r1y = cy - rayLen * Math.cos(rTheta1);

          ctx.strokeStyle = '#ef4444';
          ctx.lineWidth = 3.5;
          ctx.shadowColor = '#ef4444';
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(r1x, r1y);
          ctx.stroke();
          ctx.shadowBlur = 0;

          const criticalAngle = Math.asin(n2 / n1) * (180 / Math.PI);
          solverSteps.innerHTML = `
            <div class="calc-step">
              <strong>Step 1: Critical Angle of Interface</strong>
              <div>For n₁ = ${n1.toFixed(2)} to n₂ = ${n2.toFixed(2)}:</div>
              <div class="calc-formula">θ_c = sin⁻¹(n₂ / n₁) = sin⁻¹(${n2.toFixed(2)} / ${n1.toFixed(2)})</div>
              <div>θ_c ≈ <span class="calc-var-highlight">${criticalAngle.toFixed(1)}°</span></div>
            </div>
            <div class="calc-step" style="border-left-color: #ef4444;">
              <strong>Step 2: Total Internal Reflection Check</strong>
              <div>Incident Angle <span class="calc-var-highlight">${theta1}°</span> is greater than Critical Angle <span class="calc-var-highlight">${criticalAngle.toFixed(1)}°</span>.</div>
              <div style="font-weight:700; color:#ef4444; margin-top:0.25rem;">
                No refraction possible. Light reflects 100% back into Medium 1.
              </div>
            </div>
          `;
        } else {
          tirBadge.style.display = 'none';
          const rTheta2 = Math.asin(sinTheta2);
          const theta2 = rTheta2 * (180 / Math.PI);

          const rx2 = cx + rayLen * Math.sin(rTheta2);
          const ry2 = cy + rayLen * Math.cos(rTheta2);

          ctx.strokeStyle = '#10b981';
          ctx.lineWidth = 3.5;
          ctx.shadowColor = '#10b981';
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(rx2, ry2);
          ctx.stroke();
          ctx.shadowBlur = 0;

          const r1x = cx + rayLen * Math.sin(rTheta1);
          const r1y = cy - rayLen * Math.cos(rTheta1);
          ctx.strokeStyle = 'rgba(234, 179, 8, 0.25)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(r1x, r1y);
          ctx.stroke();

          ctx.strokeStyle = '#eab308';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(cx, cy, 35, -Math.PI/2, -Math.PI/2 - rTheta1, true);
          ctx.stroke();
          ctx.fillStyle = '#eab308';
          ctx.font = '10px sans-serif';
          ctx.fillText(`θ₁:${theta1}°`, cx - 32, cy - 42);

          ctx.strokeStyle = '#10b981';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(cx, cy, 35, Math.PI/2, Math.PI/2 - rTheta2, true);
          ctx.stroke();
          ctx.fillStyle = '#10b981';
          ctx.fillText(`θ₂:${theta2.toFixed(1)}°`, cx + 8, cy + 45);

          solverSteps.innerHTML = `
            <div class="calc-step">
              <strong>Step 1: Write Snell's Law</strong>
              <div class="calc-formula">n₁ • sin(θ₁) = n₂ • sin(θ₂)</div>
              Substitute: ${n1.toFixed(2)} • sin(${theta1}°) = ${n2.toFixed(2)} • sin(θ₂)
            </div>
            <div class="calc-step">
              <strong>Step 2: Solve for sin(θ₂)</strong>
              <div class="calc-formula">sin(θ₂) = (n₁ • sin(θ₁)) / n₂</div>
              sin(θ₂) = (${n1.toFixed(2)} • ${sinTheta1.toFixed(4)}) / ${n2.toFixed(2)} = <span class="calc-var-highlight blue">${sinTheta2.toFixed(4)}</span>
            </div>
            <div class="calc-step" style="border-left-color: #10b981;">
              <strong>Step 3: Find Refraction Angle (θ₂)</strong>
              <div class="calc-formula">θ₂ = sin⁻¹(${sinTheta2.toFixed(4)})</div>
              θ₂ = <span class="calc-var-highlight green">${theta2.toFixed(1)}°</span>
            </div>
          `;
        }

        ctx.fillStyle = '#94a3b8';
        ctx.font = '11px Outfit, sans-serif';
        ctx.fillText("NORMAL", cx - 22, 22);
        ctx.fillText("INTERFACE", 10, cy - 8);

        ctx.font = '12px Outfit, sans-serif';
        ctx.fillStyle = n1 > 1.2 ? 'var(--text-main)' : '#ffffff';
        ctx.fillText(n1 === 1.0 ? "Medium 1: Air" : n1 === 1.33 ? "Medium 1: Water" : n1 === 1.5 ? "Medium 1: Glass" : "Medium 1: Diamond", 15, 30);
        ctx.fillStyle = n2 > 1.2 ? 'var(--text-main)' : '#ffffff';
        ctx.fillText(n2 === 1.0 ? "Medium 2: Air" : n2 === 1.33 ? "Medium 2: Water" : n2 === 1.5 ? "Medium 2: Glass" : "Medium 2: Diamond", 15, cy + 30);
      }

      rngTheta1.addEventListener('input', updateSimulation);
      selN1.addEventListener('change', updateSimulation);
      selN2.addEventListener('change', updateSimulation);

      function handleCanvasDrag(e) {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        const mouseX = (e.clientX - rect.left) * scaleX;
        const mouseY = (e.clientY - rect.top) * scaleY;

        const W = canvas.width;
        const cx = W / 2;
        const cy = canvas.height / 2;

        const dx = cx - mouseX;
        const dy = cy - mouseY;

        if (mouseY < cy - 10) {
          let dragAngle = Math.atan2(dx, dy) * (180 / Math.PI);
          dragAngle = Math.max(0, Math.min(89, Math.round(dragAngle)));
          rngTheta1.value = dragAngle;
          updateSimulation();
        }
      }

      canvas.addEventListener('mousedown', (e) => {
        isDragging = true;
        handleCanvasDrag(e);
      });

      canvas.addEventListener('mousemove', (e) => {
        if (isDragging) handleCanvasDrag(e);
      });

      window.addEventListener('mouseup', () => {
        isDragging = false;
      });

      canvas.addEventListener('touchstart', (e) => {
        isDragging = true;
        if (e.touches.length > 0) handleCanvasDrag(e.touches[0]);
      });
      canvas.addEventListener('touchmove', (e) => {
        if (isDragging && e.touches.length > 0) {
          handleCanvasDrag(e.touches[0]);
        }
      });
      canvas.addEventListener('touchend', () => {
        isDragging = false;
      });

      updateSimulation();
    }

    function initPlaneMirrorLab() {
      const canvas = document.getElementById('plane-mirror-canvas');
      const ctx = canvas.getContext('2d');
      const rngTheta = document.getElementById('rng-plane-theta1');
      const btnSmooth = document.getElementById('btn-plane-smooth');
      const btnRough = document.getElementById('btn-plane-rough');

      let isSmooth = true;
      let theta = 45;
      let isDragging = false;

      btnSmooth.addEventListener('click', () => {
        isSmooth = true;
        btnSmooth.classList.add('active');
        btnRough.classList.remove('active');
        updateSimulation();
      });

      btnRough.addEventListener('click', () => {
        isSmooth = false;
        btnRough.classList.add('active');
        btnSmooth.classList.remove('active');
        updateSimulation();
      });

      function updateSimulation() {
        theta = parseInt(rngTheta.value);
        document.getElementById('lbl-plane-theta1').textContent = `${theta}°`;

        const W = canvas.width;
        const H = canvas.height;
        const cx = W / 2;
        const cy = H / 2;

        ctx.clearRect(0, 0, W, H);

        // Draw background
        ctx.fillStyle = '#0b0f19';
        if (document.documentElement.getAttribute('data-theme') === 'light') {
          ctx.fillStyle = '#f8fafc';
        }
        ctx.fillRect(0, 0, W, H);

        if (isSmooth) {
          // Draw Plane Mirror line (vertical line in the middle)
          ctx.strokeStyle = 'var(--accent-color)';
          ctx.lineWidth = 6;
          ctx.beginPath();
          ctx.moveTo(cx, 20);
          ctx.lineTo(cx, H - 20);
          ctx.stroke();

          // Mirror backing shading
          ctx.strokeStyle = 'var(--border-color)';
          ctx.lineWidth = 1;
          for (let y = 30; y < H - 20; y += 8) {
            ctx.beginPath();
            ctx.moveTo(cx, y);
            ctx.lineTo(cx + 8, y + 4);
            ctx.stroke();
          }

          // Draw Normal (perpendicular line, horizontal dotted)
          ctx.strokeStyle = '#a855f7'; // Purple for normal
          ctx.lineWidth = 1.5;
          ctx.setLineDash([4, 4]);
          ctx.beginPath();
          ctx.moveTo(30, cy);
          ctx.lineTo(cx + 10, cy);
          ctx.stroke();
          ctx.setLineDash([]);

          ctx.fillStyle = '#a855f7';
          ctx.font = 'bold 11px Outfit, sans-serif';
          ctx.fillText("NORMAL (Perpendicular to Mirror)", 40, cy - 8);

          // Draw Incident Ray
          const rTheta = (theta * Math.PI) / 180;
          const rayLen = 180;
          const rx = cx - rayLen * Math.cos(rTheta);
          const ry = cy - rayLen * Math.sin(rTheta);

          ctx.strokeStyle = '#eab308'; // Yellow for incident
          ctx.lineWidth = 3.5;
          ctx.shadowColor = '#eab308';
          ctx.shadowBlur = 6;
          ctx.beginPath();
          ctx.moveTo(rx, ry);
          ctx.lineTo(cx, cy);
          ctx.stroke();
          ctx.shadowBlur = 0;

          // Draw laser pointer barrel
          ctx.fillStyle = '#ef4444';
          ctx.save();
          ctx.translate(rx, ry);
          ctx.rotate(rTheta);
          ctx.fillRect(-20, -8, 20, 16);
          ctx.fillStyle = '#374151';
          ctx.fillRect(0, -4, 4, 8);
          ctx.restore();

          // Draw Reflected Ray
          const rx2 = cx - rayLen * Math.cos(rTheta);
          const ry2 = cy + rayLen * Math.sin(rTheta);

          ctx.strokeStyle = '#10b981'; // Green for reflected
          ctx.lineWidth = 3.5;
          ctx.shadowColor = '#10b981';
          ctx.shadowBlur = 6;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(rx2, ry2);
          ctx.stroke();
          ctx.shadowBlur = 0;

          // Incident Angle Arc
          ctx.strokeStyle = '#eab308';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(cx, cy, 45, Math.PI, Math.PI + rTheta);
          ctx.stroke();
          ctx.fillStyle = '#eab308';
          ctx.fillText(`i = ${theta}°`, cx - 75, cy - 15);

          // Reflected Angle Arc
          ctx.strokeStyle = '#10b981';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(cx, cy, 45, Math.PI, Math.PI - rTheta, true);
          ctx.stroke();
          ctx.fillStyle = '#10b981';
          ctx.fillText(`r = ${theta}°`, cx - 75, cy + 20);

          // Labels
          ctx.fillStyle = 'var(--text-muted)';
          ctx.font = '12px sans-serif';
          ctx.fillText("Incident Ray", rx + 15, ry + (ry < cy ? 25 : -15));
          ctx.fillText("Reflected Ray", rx2 + 15, ry2 + (ry2 < cy ? 25 : -15));

          const solverSteps = document.getElementById('plane-mirror-solver-steps');
          solverSteps.innerHTML = `
            <div class="calc-step">
              <strong>Step 1: Identify Normal Line</strong>
              <div>The Normal is perpendicular to the mirror surface at the point of incidence (0° reference).</div>
            </div>
            <div class="calc-step">
              <strong>Step 2: Apply Laws of Reflection</strong>
              <div class="calc-formula">∠i = ∠r</div>
              Angle of Incidence (∠i) = <span class="calc-var-highlight yellow">${theta}°</span>
            </div>
            <div class="calc-step" style="border-left-color: #10b981;">
              <strong>Step 3: Calculate Angle of Reflection (∠r)</strong>
              <div>Angle of Reflection (∠r) = <span class="calc-var-highlight green">${theta}°</span></div>
              <div style="font-weight:700; margin-top:0.25rem; color:#10b981;">
                ∠i = ∠r = ${theta}° (Verified!)
              </div>
            </div>
          `;
        } else {
          // ROUGH SURFACE REFLECTION
          // Draw wavy mirror line
          ctx.strokeStyle = 'var(--accent-color)';
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.moveTo(cx, 20);
          for (let y = 20; y <= H - 20; y += 10) {
            const xOffset = Math.sin(y / 15) * 12;
            ctx.lineTo(cx + xOffset, y);
          }
          ctx.stroke();

          // Draw backing lines
          ctx.strokeStyle = 'rgba(148, 163, 184, 0.2)';
          ctx.lineWidth = 1;
          for (let y = 30; y < H - 20; y += 15) {
            const xOffset = Math.sin(y / 15) * 12;
            ctx.beginPath();
            ctx.moveTo(cx + xOffset, y);
            ctx.lineTo(cx + xOffset + 8, y + 4);
            ctx.stroke();
          }

          const yOffsets = [-50, 0, 50];
          const rayLen = 220;
          const rTheta = (theta * Math.PI) / 180;

          yOffsets.forEach((yo, idx) => {
            const hitY = cy + yo;
            const hitX = cx + Math.sin(hitY / 15) * 12;

            const rx = hitX - rayLen * Math.cos(rTheta);
            const ry = hitY - rayLen * Math.sin(rTheta);

            // Draw Incident Ray
            ctx.strokeStyle = '#eab308';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.moveTo(rx, ry);
            ctx.lineTo(hitX, hitY);
            ctx.stroke();

            // Local tangent slope
            const dy = 10;
            const dx = (Math.sin((hitY + 5) / 15) - Math.sin((hitY - 5) / 15)) * 12;
            const tangentAngle = Math.atan2(dy, dx);
            const normalAngle = tangentAngle - Math.PI / 2;

            // Draw Local Normal
            ctx.strokeStyle = '#a855f7';
            ctx.lineWidth = 1;
            ctx.setLineDash([3, 3]);
            ctx.beginPath();
            ctx.moveTo(hitX - 40 * Math.cos(normalAngle), hitY - 40 * Math.sin(normalAngle));
            ctx.lineTo(hitX + 10 * Math.cos(normalAngle), hitY + 10 * Math.sin(normalAngle));
            ctx.stroke();
            ctx.setLineDash([]);

            if (idx === 1) {
              ctx.fillStyle = '#a855f7';
              ctx.font = '9px sans-serif';
              ctx.fillText("Local Normal (Tilted)", hitX - 110, hitY - 12);
            }

            const ix = Math.cos(rTheta);
            const iy = Math.sin(rTheta);
            const nx = -Math.cos(normalAngle);
            const ny = -Math.sin(normalAngle);
            const dot = ix * nx + iy * ny;
            const rx_dir = ix - 2 * dot * nx;
            const ry_dir = iy - 2 * dot * ny;

            // Draw Reflected Ray
            ctx.strokeStyle = '#10b981';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.moveTo(hitX, hitY);
            ctx.lineTo(hitX + rayLen * rx_dir, hitY + rayLen * ry_dir);
            ctx.stroke();
          });

          // Draw laser pointer barrel
          const laserY = cy;
          const laserX = cx - rayLen * Math.cos(rTheta);
          ctx.fillStyle = '#ef4444';
          ctx.save();
          ctx.translate(laserX, laserY);
          ctx.rotate(rTheta);
          ctx.fillRect(-20, -15, 20, 30);
          ctx.fillStyle = '#374151';
          ctx.fillRect(0, -6, 4, 12);
          ctx.restore();

          const solverSteps = document.getElementById('plane-mirror-solver-steps');
          solverSteps.innerHTML = `
            <div class="calc-step" style="border-left-color: #a855f7;">
              <strong>Step 1: Normals are NOT parallel</strong>
              <div>Because the surface is rough/wavy, the normal line at each point tilts at a different angle.</div>
            </div>
            <div class="calc-step">
              <strong>Step 2: Laws of Reflection still hold!</strong>
              <div>For every single ray, ∠i = ∠r relative to its own <em>local normal</em>.</div>
            </div>
            <div class="calc-step" style="border-left-color: #ef4444;">
              <strong>Step 3: Scattered Rays (Diffuse Reflection)</strong>
              <div>Since the normals point in random directions, parallel incident rays reflect in completely different directions. No clear image can form!</div>
            </div>
          `;
        }
      }

      rngTheta.addEventListener('input', updateSimulation);

      function handleCanvasDrag(e) {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        const mouseX = (e.clientX - rect.left) * scaleX;
        const mouseY = (e.clientY - rect.top) * scaleY;

        const cx = canvas.width / 2;
        const cy = canvas.height / 2;

        const dx = cx - mouseX;
        const dy = cy - mouseY;

        if (mouseX < cx - 10) {
          let dragAngle = Math.atan2(dy, dx) * (180 / Math.PI);
          dragAngle = Math.max(0, Math.min(80, Math.round(dragAngle)));
          rngTheta.value = dragAngle;
          updateSimulation();
        }
      }

      canvas.addEventListener('mousedown', (e) => {
        isDragging = true;
        handleCanvasDrag(e);
      });

      canvas.addEventListener('mousemove', (e) => {
        if (isDragging) handleCanvasDrag(e);
      });

      window.addEventListener('mouseup', () => {
        isDragging = false;
      });

      canvas.addEventListener('touchstart', (e) => {
        isDragging = true;
        if (e.touches.length > 0) handleCanvasDrag(e.touches[0]);
      });
      canvas.addEventListener('touchmove', (e) => {
        if (isDragging && e.touches.length > 0) {
          handleCanvasDrag(e.touches[0]);
        }
      });
      canvas.addEventListener('touchend', () => {
        isDragging = false;
      });

      updateSimulation();
    }

    function initMirrorLab() {
      const canvas = document.getElementById('mirror-canvas');
      const ctx = canvas.getContext('2d');
      const rngU = document.getElementById('rng-mirror-u');
      const rngF = document.getElementById('rng-mirror-f');
      const rngHo = document.getElementById('rng-mirror-ho');
      const btnConcave = document.getElementById('btn-mirror-concave');
      const btnConvex = document.getElementById('btn-mirror-convex');
      const badgeHolder = document.getElementById('mirror-badge-holder');

      let isConcave = true;
      let isDragging = false;
      let dragMode = null;

      btnConcave.addEventListener('click', () => {
        isConcave = true;
        btnConcave.classList.add('active');
        btnConvex.classList.remove('active');
        updateSimulation();
      });

      btnConvex.addEventListener('click', () => {
        isConcave = false;
        btnConvex.classList.add('active');
        btnConcave.classList.remove('active');
        updateSimulation();
      });

      function updateSimulation() {
        let u = parseInt(rngU.value);
        let fVal = parseInt(rngF.value);
        let ho = parseInt(rngHo.value);
        
        let f = isConcave ? -fVal : fVal;

        document.getElementById('lbl-mirror-u').textContent = `${u} cm`;
        document.getElementById('lbl-mirror-f').textContent = `${fVal} cm (${isConcave ? 'Concave' : 'Convex'})`;
        document.getElementById('lbl-mirror-ho').textContent = `${ho} cm`;

        const W = canvas.width;
        const H = canvas.height;
        const cx = 450;
        const cy = H / 2;

        ctx.clearRect(0, 0, W, H);

        ctx.strokeStyle = 'var(--text-light)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(10, cy);
        ctx.lineTo(W - 10, cy);
        ctx.stroke();

        ctx.strokeStyle = 'var(--text-muted)';
        ctx.lineWidth = 4;
        ctx.beginPath();
        if (isConcave) {
          ctx.arc(cx - 300, cy, 304, -Math.asin(100/304), Math.asin(100/304));
        } else {
          ctx.arc(cx + 300, cy, 304, Math.PI - Math.asin(100/304), Math.PI + Math.asin(100/304));
        }
        ctx.stroke();

        ctx.strokeStyle = 'rgba(148, 163, 184, 0.3)';
        ctx.lineWidth = 1;
        for (let yOffset = -90; yOffset <= 90; yOffset += 10) {
          ctx.beginPath();
          const mx = cx + (isConcave ? (yOffset*yOffset)/600 : -(yOffset*yOffset)/600);
          ctx.moveTo(mx, cy + yOffset);
          ctx.lineTo(mx + (isConcave ? 5 : -5), cy + yOffset - 5);
          ctx.stroke();
        }

        ctx.fillStyle = 'var(--text-main)';
        ctx.font = '11px sans-serif';
        
        ctx.beginPath(); ctx.arc(cx, cy, 4, 0, 2*Math.PI); ctx.fill();
        ctx.fillText("P", cx + (isConcave ? 8 : -14), cy - 6);

        const R_curvature = 2 * f;
        const fx = cx + f;
        const cx_pt = cx + R_curvature;

        ctx.fillStyle = '#3b82f6';
        ctx.beginPath(); ctx.arc(fx, cy, 4, 0, 2*Math.PI); ctx.fill();
        ctx.fillText("F", fx, cy - 8);

        ctx.fillStyle = '#10b981';
        ctx.beginPath(); ctx.arc(cx_pt, cy, 4, 0, 2*Math.PI); ctx.fill();
        ctx.fillText("C", cx_pt, cy - 8);

        let v = 0;
        let isInfinity = false;
        let m = 0;
        let hi = 0;

        if (u === f) {
          isInfinity = true;
        } else {
          v = (u * f) / (u - f);
          m = -v / u;
          hi = m * ho;
        }

        const objX = cx + u;
        const objY = cy - ho;

        ctx.strokeStyle = '#22c55e';
        ctx.lineWidth = 3.5;
        ctx.beginPath();
        ctx.moveTo(objX, cy);
        ctx.lineTo(objX, objY);
        ctx.stroke();

        ctx.fillStyle = '#22c55e';
        ctx.beginPath();
        ctx.moveTo(objX - 6, objY + 8);
        ctx.lineTo(objX, objY);
        ctx.lineTo(objX + 6, objY + 8);
        ctx.fill();

        ctx.fillStyle = '#22c55e';
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText("Object", objX - 18, objY - 8);

        const solverDiv = document.getElementById('mirror-solver-steps');

        if (isInfinity) {
          badgeHolder.innerHTML = `<span class="live-badge image-real" style="background-color:rgba(234,179,8,0.2); color:#eab308; border-color:#eab308;">IMAGE AT INFINITY</span>`;
          
          ctx.strokeStyle = '#eab308';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(objX, objY);
          ctx.lineTo(cx, objY);
          ctx.lineTo(cx + u * 2, cy);
          ctx.stroke();

          ctx.strokeStyle = '#ef4444';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(cx_pt, cy);
          ctx.lineTo(objX, objY);
          ctx.lineTo(cx - ho * 0.1, cy - ho);
          ctx.stroke();

          solverDiv.innerHTML = `
            <div class="calc-step">
              <strong>Step 1: Write Mirror Formula</strong>
              <div class="calc-formula">1/v + 1/u = 1/f</div>
              Substitute values: 1/v + 1/(${u}) = 1/(${f})
            </div>
            <div class="calc-step" style="border-left-color: #eab308;">
              <strong>Step 2: Solve for v</strong>
              <div class="calc-formula">1/v = 1/f - 1/u</div>
              1/v = 1/(${f}) - 1/(${u}) = 0
              <div style="font-weight:700; color: #eab308; margin-top:0.25rem;">
                v = ±∞. Reflected rays are perfectly parallel. No focal convergence.
              </div>
            </div>
          `;
        } else {
          const imgX = cx + v;
          const imgY = cy - hi;

          const isReal = v < 0;
          if (isReal) {
            badgeHolder.innerHTML = `<span class="live-badge image-real">REAL & INVERTED</span>`;
          } else {
            badgeHolder.innerHTML = `<span class="live-badge image-virtual">VIRTUAL & ERECT</span>`;
          }

          ctx.strokeStyle = isReal ? '#3b82f6' : '#d946ef';
          ctx.lineWidth = 3.5;
          ctx.beginPath();
          ctx.moveTo(imgX, cy);
          ctx.lineTo(imgX, imgY);
          ctx.stroke();
          
          ctx.fillStyle = isReal ? '#3b82f6' : '#d946ef';
          ctx.beginPath();
          if (hi >= 0) {
            ctx.moveTo(imgX - 6, imgY + 8);
            ctx.lineTo(imgX, imgY);
            ctx.lineTo(imgX + 6, imgY + 8);
          } else {
            ctx.moveTo(imgX - 6, imgY - 8);
            ctx.lineTo(imgX, imgY);
            ctx.lineTo(imgX + 6, imgY - 8);
          }
          ctx.fill();

          ctx.font = 'bold 11px sans-serif';
          ctx.fillText(`Image (v:${v.toFixed(1)})`, imgX - 35, imgY + (hi >= 0 ? -8 : 14));
          const mirrorY1 = objY;
          const mX1 = cx + (isConcave ? (mirrorY1-cy)*(mirrorY1-cy)/600 : -(mirrorY1-cy)*(mirrorY1-cy)/600);
          
          ctx.strokeStyle = '#eab308';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(objX, objY);
          ctx.lineTo(mX1, mirrorY1);
          ctx.lineTo(imgX, imgY);
          ctx.stroke();

          // Draw Normal (radius pointing to C)
          ctx.strokeStyle = '#a855f7'; // Purple for normal
          ctx.lineWidth = 1;
          ctx.setLineDash([3, 3]);
          ctx.beginPath();
          ctx.moveTo(cx_pt, cy); // C
          ctx.lineTo(mX1, mirrorY1); // point of incidence
          ctx.stroke();
          ctx.setLineDash([]);
          
          ctx.fillStyle = '#a855f7';
          ctx.font = '10px sans-serif';
          ctx.fillText("Normal (to C)", (mX1 + cx_pt)/2 - 15, (mirrorY1 + cy)/2 - 5);

          if (!isReal) {
            ctx.strokeStyle = '#eab308';
            ctx.setLineDash([4, 4]);
            ctx.beginPath();
            ctx.moveTo(mX1, mirrorY1);
            ctx.lineTo(imgX, imgY);
            ctx.stroke();
            ctx.setLineDash([]);
          }

          const mX2 = cx;
          const mY2 = cy - hi;
          
          ctx.strokeStyle = '#ef4444';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(objX, objY);
          ctx.lineTo(mX2, mY2);
          ctx.lineTo(isReal ? imgX : objX - 100, mY2);
          ctx.stroke();

          if (!isReal) {
            ctx.strokeStyle = '#ef4444';
            ctx.setLineDash([4, 4]);
            ctx.beginPath();
            ctx.moveTo(mX2, mY2);
            ctx.lineTo(imgX, imgY);
            ctx.stroke();
            ctx.setLineDash([]);
          }

          solverDiv.innerHTML = `
            <div class="calc-step">
              <strong>Step 1: Sign Convention check (HC Verma Rule)</strong>
              <div>• Focal length (f) is <span class="calc-var-highlight">${f.toFixed(0)} cm</span> (${isConcave ? 'Concave: negative' : 'Convex: positive'}).</div>
              <div>• Object is in front, so u = <span class="calc-var-highlight">${u} cm</span> (negative).</div>
            </div>
            <div class="calc-step">
              <strong>Step 2: Mirror Formula calculation</strong>
              <div class="calc-formula">1/v = 1/f - 1/u</div>
              1/v = 1/(${f}) - 1/(${u}) <br>
              1/v = ${ (1/f).toFixed(4) } - (${ (1/u).toFixed(4) }) = <span class="calc-var-highlight blue">${(1/v).toFixed(5)}</span>
            </div>
            <div class="calc-step" style="border-left-color: ${isReal ? '#3b82f6' : '#d946ef'};">
              <strong>Step 3: Resolve v and Magnification (m)</strong>
              <div>• Image Distance v = <span class="calc-var-highlight">${v.toFixed(1)} cm</span> (${isReal ? 'Real space (front)' : 'Virtual space (back)'}).</div>
              <div class="calc-formula">m = -v / u = -(${v.toFixed(1)}) / (${u}) = ${m.toFixed(2)}</div>
              <div>• Image is <span class="calc-var-highlight green">${Math.abs(m) > 1 ? 'Magnified' : 'Diminished'}</span> and <span class="calc-var-highlight green">${m > 0 ? 'Virtual & Erect' : 'Real & Inverted'}</span>.</div>
            </div>
          `;
        }

        ctx.fillStyle = '#94a3b8';
        ctx.fillText("Real Side (Front)", 30, cy + 140);
        ctx.fillText("Virtual Side (Back)", cx + 30, cy + 140);
      }

      rngU.addEventListener('input', updateSimulation);
      rngF.addEventListener('input', updateSimulation);
      rngHo.addEventListener('input', updateSimulation);

      function handleCanvasDrag(e) {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        const mouseX = (e.clientX - rect.left) * scaleX;
        const mouseY = (e.clientY - rect.top) * scaleY;

        const cx = 450;
        const cy = canvas.height / 2;

        const uVal = Math.round(mouseX - cx);
        const hoVal = Math.round(cy - mouseY);

        if (dragMode === 'pos') {
          const targetU = Math.min(-20, Math.max(-300, uVal));
          rngU.value = targetU;
        } else if (dragMode === 'height') {
          const targetHo = Math.min(80, Math.max(10, hoVal));
          rngHo.value = targetHo;
        }
        updateSimulation();
      }

      canvas.addEventListener('mousedown', (e) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const cx = 450;
        const cy = canvas.height / 2;

        const uVal = parseInt(rngU.value);
        const hoVal = parseInt(rngHo.value);

        const objX = cx + uVal;
        const objY = cy - hoVal;

        if (Math.abs(mouseX - objX) < 15 && Math.abs(mouseY - objY) < 15) {
          isDragging = true;
          dragMode = 'height';
        } else if (Math.abs(mouseX - objX) < 20 && Math.abs(mouseY - cy) < hoVal + 10) {
          isDragging = true;
          dragMode = 'pos';
        }
      });

      canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const cx = 450;
        const cy = canvas.height / 2;

        const uVal = parseInt(rngU.value);
        const hoVal = parseInt(rngHo.value);

        const objX = cx + uVal;
        const objY = cy - hoVal;

        if (isDragging) {
          handleCanvasDrag(e);
        } else {
          if (Math.abs(mouseX - objX) < 15 && Math.abs(mouseY - objY) < 15) {
            canvas.style.cursor = 'ns-resize';
          } else if (Math.abs(mouseX - objX) < 20 && Math.abs(mouseY - cy) < hoVal + 10) {
            canvas.style.cursor = 'ew-resize';
          } else {
            canvas.style.cursor = 'crosshair';
          }
        }
      });

      window.addEventListener('mouseup', () => {
        isDragging = false;
        dragMode = null;
      });

      canvas.addEventListener('touchstart', (e) => {
        if (e.touches.length === 0) return;
        const t = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        const mouseX = t.clientX - rect.left;
        const mouseY = t.clientY - rect.top;

        const cx = 450;
        const cy = canvas.height / 2;

        const uVal = parseInt(rngU.value);
        const hoVal = parseInt(rngHo.value);

        const objX = cx + uVal;
        const objY = cy - hoVal;

        if (Math.abs(mouseX - objX) < 25 && Math.abs(mouseY - objY) < 25) {
          isDragging = true;
          dragMode = 'height';
        } else if (Math.abs(mouseX - objX) < 30 && Math.abs(mouseY - cy) < hoVal + 20) {
          isDragging = true;
          dragMode = 'pos';
        }
      });

      canvas.addEventListener('touchmove', (e) => {
        if (isDragging && e.touches.length > 0) {
          handleCanvasDrag(e.touches[0]);
          e.preventDefault();
        }
      });

      canvas.addEventListener('touchend', () => {
        isDragging = false;
        dragMode = null;
      });

      updateSimulation();
    }

    function initLensLab() {
      const canvas = document.getElementById('lens-canvas');
      const ctx = canvas.getContext('2d');
      const rngU = document.getElementById('rng-lens-u');
      const rngF = document.getElementById('rng-lens-f');
      const rngHo = document.getElementById('rng-lens-ho');
      const btnConvex = document.getElementById('btn-lens-convex');
      const btnConcave = document.getElementById('btn-lens-concave');
      const badgeHolder = document.getElementById('lens-badge-holder');

      let isConvex = true;
      let isDragging = false;
      let dragMode = null;

      btnConvex.addEventListener('click', () => {
        isConvex = true;
        btnConvex.classList.add('active');
        btnConcave.classList.remove('active');
        updateSimulation();
      });

      btnConcave.addEventListener('click', () => {
        isConvex = false;
        btnConcave.classList.add('active');
        btnConvex.classList.remove('active');
        updateSimulation();
      });

      function updateSimulation() {
        let u = parseInt(rngU.value);
        let fVal = parseInt(rngF.value);
        let ho = parseInt(rngHo.value);
        
        let f = isConvex ? fVal : -fVal;

        document.getElementById('lbl-lens-u').textContent = `${u} cm`;
        document.getElementById('lbl-lens-f').textContent = `${fVal} cm (${isConvex ? 'Convex' : 'Concave'})`;
        document.getElementById('lbl-lens-ho').textContent = `${ho} cm`;

        const W = canvas.width;
        const H = canvas.height;
        const cx = W / 2;
        const cy = H / 2;

        ctx.clearRect(0, 0, W, H);

        ctx.strokeStyle = 'var(--text-light)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(10, cy);
        ctx.lineTo(W - 10, cy);
        ctx.stroke();

        ctx.strokeStyle = 'var(--secondary-hover)';
        ctx.fillStyle = 'rgba(59, 130, 246, 0.1)';
        ctx.lineWidth = 2.5;
        
        ctx.beginPath();
        if (isConvex) {
          ctx.moveTo(cx, cy - 90);
          ctx.quadraticCurveTo(cx + 20, cy, cx, cy + 90);
          ctx.quadraticCurveTo(cx - 20, cy, cx, cy - 90);
        } else {
          ctx.moveTo(cx - 15, cy - 90);
          ctx.lineTo(cx + 15, cy - 90);
          ctx.quadraticCurveTo(cx, cy, cx + 15, cy + 90);
          ctx.lineTo(cx - 15, cy + 90);
          ctx.quadraticCurveTo(cx, cy, cx - 15, cy - 90);
        }
        ctx.fill();
        ctx.stroke();

        ctx.strokeStyle = 'rgba(148, 163, 184, 0.4)';
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(cx, 20);
        ctx.lineTo(cx, H - 20);
        ctx.stroke();
        ctx.setLineDash([]);

        const f1x = cx - fVal;
        const f2x = cx + fVal;
        const twof1x = cx - 2 * fVal;
        const twof2x = cx + 2 * fVal;

        ctx.fillStyle = '#3b82f6';
        ctx.beginPath(); ctx.arc(f1x, cy, 3.5, 0, 2*Math.PI); ctx.fill();
        ctx.fillText(isConvex ? "F₁" : "F₂", f1x - 5, cy - 8);

        ctx.beginPath(); ctx.arc(f2x, cy, 3.5, 0, 2*Math.PI); ctx.fill();
        ctx.fillText(isConvex ? "F₂" : "F₁", f2x - 5, cy - 8);

        ctx.fillStyle = 'var(--text-muted)';
        ctx.beginPath(); ctx.arc(twof1x, cy, 3.5, 0, 2*Math.PI); ctx.fill();
        ctx.fillText(isConvex ? "2F₁" : "2F₂", twof1x - 8, cy - 8);

        ctx.beginPath(); ctx.arc(twof2x, cy, 3.5, 0, 2*Math.PI); ctx.fill();
        ctx.fillText(isConvex ? "2F₂" : "2F₁", twof2x - 8, cy - 8);

        // Draw Normals for Lens (radial lines from Centers of Curvature 2F1 & 2F2 to the lens boundaries)
        ctx.strokeStyle = '#a855f7'; // Purple for normals
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);
        
        // Normal 1: From 2F1 (cx - 2fVal) to lens center top (where refraction happens)
        ctx.beginPath();
        ctx.moveTo(twof1x, cy);
        ctx.lineTo(cx, cy - 90);
        ctx.stroke();

        // Normal 2: From 2F2 (cx + 2fVal) to lens center top
        ctx.beginPath();
        ctx.moveTo(twof2x, cy);
        ctx.lineTo(cx, cy - 90);
        ctx.stroke();
        ctx.setLineDash([]);
        
        ctx.fillStyle = '#a855f7';
        ctx.font = '10px sans-serif';
        ctx.fillText("Normal 1 (to 2F₁)", (cx + twof1x)/2 - 15, cy - 50);
        ctx.fillText("Normal 2 (to 2F₂)", (cx + twof2x)/2 - 15, cy - 50);

        let v = 0;
        let isInfinity = false;
        let m = 0;
        let hi = 0;

        if (Math.abs(u + f) < 0.1) {
          isInfinity = true;
        } else {
          v = (u * f) / (u + f);
          m = v / u;
          hi = m * ho;
        }

        const objX = cx + u;
        const objY = cy - ho;

        ctx.strokeStyle = '#22c55e';
        ctx.lineWidth = 3.5;
        ctx.beginPath();
        ctx.moveTo(objX, cy);
        ctx.lineTo(objX, objY);
        ctx.stroke();

        ctx.fillStyle = '#22c55e';
        ctx.beginPath();
        ctx.moveTo(objX - 6, objY + 8);
        ctx.lineTo(objX, objY);
        ctx.lineTo(objX + 6, objY + 8);
        ctx.fill();

        ctx.font = 'bold 11px sans-serif';
        ctx.fillText("Object", objX - 18, objY - 8);

        const solverDiv = document.getElementById('lens-solver-steps');

        if (isInfinity) {
          badgeHolder.innerHTML = `<span class="live-badge image-real" style="background-color:rgba(234,179,8,0.2); color:#eab308; border-color:#eab308;">IMAGE AT INFINITY</span>`;

          ctx.strokeStyle = '#eab308';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(objX, objY);
          ctx.lineTo(cx, objY);
          ctx.lineTo(cx + fVal * 2, cy + ho);
          ctx.stroke();

          ctx.strokeStyle = '#3b82f6';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(objX, objY);
          ctx.lineTo(cx, cy);
          ctx.lineTo(cx + 200, cy - (200 / u) * ho);
          ctx.stroke();

          solverDiv.innerHTML = `
            <div class="calc-step">
              <strong>Step 1: Write Lens Formula</strong>
              <div class="calc-formula">1/v - 1/u = 1/f</div>
              Substitute values: 1/v - 1/(${u}) = 1/(${f})
            </div>
            <div class="calc-step" style="border-left-color: #eab308;">
              <strong>Step 2: Solve for v</strong>
              <div class="calc-formula">1/v = 1/f + 1/u</div>
              1/v = 1/(${f}) + 1/(${u}) = 0
              <div style="font-weight:700; color: #eab308; margin-top:0.25rem;">
                v = ±∞. Refracted rays are perfectly parallel.
              </div>
            </div>
          `;
        } else {
          const imgX = cx + v;
          const imgY = cy - hi;

          const isReal = v > 0;
          if (isReal) {
            badgeHolder.innerHTML = `<span class="live-badge image-real">REAL & INVERTED</span>`;
          } else {
            badgeHolder.innerHTML = `<span class="live-badge image-virtual">VIRTUAL & ERECT</span>`;
          }

          ctx.strokeStyle = isReal ? '#3b82f6' : '#d946ef';
          ctx.lineWidth = 3.5;
          ctx.beginPath();
          ctx.moveTo(imgX, cy);
          ctx.lineTo(imgX, imgY);
          ctx.stroke();

          ctx.fillStyle = isReal ? '#3b82f6' : '#d946ef';
          ctx.beginPath();
          if (hi >= 0) {
            ctx.moveTo(imgX - 6, imgY + 8);
            ctx.lineTo(imgX, imgY);
            ctx.lineTo(imgX + 6, imgY + 8);
          } else {
            ctx.moveTo(imgX - 6, imgY - 8);
            ctx.lineTo(imgX, imgY);
            ctx.lineTo(imgX + 6, imgY - 8);
          }
          ctx.fill();

          ctx.font = 'bold 11px sans-serif';
          ctx.fillText(`Image (v:${v.toFixed(1)})`, imgX - 35, imgY + (hi >= 0 ? -8 : 14));

          ctx.strokeStyle = '#eab308';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(objX, objY);
          ctx.lineTo(cx, objY);
          ctx.lineTo(imgX, imgY);
          ctx.stroke();

          if (!isReal) {
            ctx.strokeStyle = '#eab308';
            ctx.setLineDash([4, 4]);
            ctx.beginPath();
            ctx.moveTo(cx, objY);
            ctx.lineTo(imgX, imgY);
            ctx.stroke();
            ctx.setLineDash([]);
          }

          ctx.strokeStyle = '#3b82f6';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(objX, objY);
          ctx.lineTo(cx, cy);
          ctx.lineTo(isReal ? imgX : cx + 200, cy - (200 / u) * ho);
          ctx.stroke();

          if (!isReal) {
            ctx.strokeStyle = '#3b82f6';
            ctx.setLineDash([4, 4]);
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(imgX, imgY);
            ctx.stroke();
            ctx.setLineDash([]);
          }

          solverDiv.innerHTML = `
            <div class="calc-step">
              <strong>Step 1: Sign Convention check (HC Verma Rule)</strong>
              <div>• Focal length (f) is <span class="calc-var-highlight">${f.toFixed(0)} cm</span> (${isConvex ? 'Convex: positive' : 'Concave: negative'}).</div>
              <div>• Object is in front, so u = <span class="calc-var-highlight">${u} cm</span> (negative).</div>
            </div>
            <div class="calc-step">
              <strong>Step 2: Lens Formula calculation</strong>
              <div class="calc-formula">1/v = 1/f + 1/u</div>
              1/v = 1/(${f}) + 1/(${u}) <br>
              1/v = ${ (1/f).toFixed(4) } + (${ (1/u).toFixed(4) }) = <span class="calc-var-highlight blue">${(1/v).toFixed(5)}</span>
            </div>
            <div class="calc-step" style="border-left-color: ${isReal ? '#3b82f6' : '#d946ef'};">
              <strong>Step 3: Resolve v and Magnification (m)</strong>
              <div>• Image Distance v = <span class="calc-var-highlight">${v.toFixed(1)} cm</span> (${isReal ? 'Real space (right)' : 'Virtual space (left)'}).</div>
              <div class="calc-formula">m = v / u = (${v.toFixed(1)}) / (${u}) = ${m.toFixed(2)}</div>
              <div>• Image is <span class="calc-var-highlight green">${Math.abs(m) > 1 ? 'Magnified' : 'Diminished'}</span> and <span class="calc-var-highlight green">${m > 0 ? 'Virtual & Erect' : 'Real & Inverted'}</span>.</div>
            </div>
          `;
        }

        ctx.fillStyle = '#94a3b8';
        ctx.fillText("Incident Side (Left)", 30, cy + 140);
        ctx.fillText("Transmission Side (Right)", cx + 30, cy + 140);
      }

      rngU.addEventListener('input', updateSimulation);
      rngF.addEventListener('input', updateSimulation);
      rngHo.addEventListener('input', updateSimulation);

      function handleCanvasDrag(e) {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        const mouseX = (e.clientX - rect.left) * scaleX;
        const mouseY = (e.clientY - rect.top) * scaleY;

        const cx = canvas.width / 2;
        const cy = canvas.height / 2;

        const uVal = Math.round(mouseX - cx);
        const hoVal = Math.round(cy - mouseY);

        if (dragMode === 'pos') {
          const targetU = Math.min(-20, Math.max(-300, uVal));
          rngU.value = targetU;
        } else if (dragMode === 'height') {
          const targetHo = Math.min(80, Math.max(10, hoVal));
          rngHo.value = targetHo;
        }
        updateSimulation();
      }

      canvas.addEventListener('mousedown', (e) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const cx = canvas.width / 2;
        const cy = canvas.height / 2;

        const uVal = parseInt(rngU.value);
        const hoVal = parseInt(rngHo.value);

        const objX = cx + uVal;
        const objY = cy - hoVal;

        if (Math.abs(mouseX - objX) < 15 && Math.abs(mouseY - objY) < 15) {
          isDragging = true;
          dragMode = 'height';
        } else if (Math.abs(mouseX - objX) < 20 && Math.abs(mouseY - cy) < hoVal + 10) {
          isDragging = true;
          dragMode = 'pos';
        }
      });

      canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const cx = canvas.width / 2;
        const cy = canvas.height / 2;

        const uVal = parseInt(rngU.value);
        const hoVal = parseInt(rngHo.value);

        const objX = cx + uVal;
        const objY = cy - hoVal;

        if (isDragging) {
          handleCanvasDrag(e);
        } else {
          if (Math.abs(mouseX - objX) < 15 && Math.abs(mouseY - objY) < 15) {
            canvas.style.cursor = 'ns-resize';
          } else if (Math.abs(mouseX - objX) < 20 && Math.abs(mouseY - cy) < hoVal + 10) {
            canvas.style.cursor = 'ew-resize';
          } else {
            canvas.style.cursor = 'crosshair';
          }
        }
      });

      window.addEventListener('mouseup', () => {
        isDragging = false;
        dragMode = null;
      });

      canvas.addEventListener('touchstart', (e) => {
        if (e.touches.length === 0) return;
        const t = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        const mouseX = t.clientX - rect.left;
        const mouseY = t.clientY - rect.top;

        const cx = canvas.width / 2;
        const cy = canvas.height / 2;

        const uVal = parseInt(rngU.value);
        const hoVal = parseInt(rngHo.value);

        const objX = cx + uVal;
        const objY = cy - hoVal;

        if (Math.abs(mouseX - objX) < 25 && Math.abs(mouseY - objY) < 25) {
          isDragging = true;
          dragMode = 'height';
        } else if (Math.abs(mouseX - objX) < 30 && Math.abs(mouseY - cy) < hoVal + 20) {
          isDragging = true;
          dragMode = 'pos';
        }
      });

      canvas.addEventListener('touchmove', (e) => {
        if (isDragging && e.touches.length > 0) {
          handleCanvasDrag(e.touches[0]);
          e.preventDefault();
        }
      });

      canvas.addEventListener('touchend', () => {
        isDragging = false;
        dragMode = null;
      });

      updateSimulation();
    }
    


  return `
    <div class="page-container">
      <!-- Dynamic Breadcrumb -->
      <div class="breadcrumb-container">
        <a href="#/" class="breadcrumb-item">Home</a>
        <span class="breadcrumb-separator">/</span>
        <a href="#/classes" class="breadcrumb-item">Classes</a>
        <span class="breadcrumb-separator">/</span>
        <a href="#/class/${classId}" class="breadcrumb-item">${classObj.name}</a>
        <span class="breadcrumb-separator">/</span>
        <a href="#/class/${classId}/subject/${subjectId}" class="breadcrumb-item">${subjectObj.name}</a>
        <span class="breadcrumb-separator">/</span>
        <span class="breadcrumb-item active">${topicObj.title}</span>
      </div>

      <!-- Topic Title & Header -->
      <div class="subject-header-container" style="margin-bottom: 2.5rem;">
        <span style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--primary-color); letter-spacing: 1px;">
          ${chapterObj?.title || 'Chapter Topic'}
        </span>
        <h1 class="subject-header-title" style="font-size: 2.2rem; margin-top: 0.25rem;">${topicObj.title}</h1>
      </div>

      <!-- Viewer Workspace Grid -->
      <div class="topic-viewer-grid">
        <!-- Sidebar Navigation Tabs -->
        <aside class="topic-sidebar">
          <h3 class="sidebar-title">Lesson Workspace</h3>
          
          <button class="nav-tab-btn active" data-tab="lesson">
            <span class="nav-tab-icon">📖</span>
            <span>Interactive Lesson</span>
          </button>
          
          <button class="nav-tab-btn" data-tab="quiz">
            <span class="nav-tab-icon">📝</span>
            <span>Lesson Quiz</span>
          </button>
        </aside>

        <!-- Main output viewing terminal screen -->
        <div class="viewer-content-card">
          <div class="viewer-header" style="display: flex; justify-content: space-between; align-items: center;">
            <div class="viewer-title">
              <span id="viewer-title-icon">📖</span>
              <span id="viewer-title-text">Interactive Lesson & Visual Lab</span>
            </div>
            <div style="display: flex; align-items: center; gap: 1rem;">
              <button id="btn-audio-speak" class="voice-btn" title="Listen to Lesson Audio Guide">
                <span>🔊 AI Tutor Voice</span>
                <div class="audio-wave-container" id="voice-audio-wave" style="display: none;">
                  <div class="audio-wave-bar"></div>
                  <div class="audio-wave-bar"></div>
                  <div class="audio-wave-bar"></div>
                </div>
              </button>
              <span style="font-size:0.75rem; background-color: var(--accent-glow); color: var(--accent-color); padding: 0.25rem 0.5rem; border-radius: var(--radius-full); font-weight: 700;">LIVE SCREEN</span>
            </div>
          </div>
          <div class="viewer-body" id="viewer-body-container">
            <!-- Dynamically populated via JS -->
          </div>
        </div>
      </div>
    </div>
  `;

    // =====================================================
    // NEW SIMULATION INIT FUNCTIONS
    // =====================================================

    function initCorrosionLab() {
      const canvas = document.getElementById('corrosion-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const sel = document.getElementById('sel-corrosion-env');
      const btn = document.getElementById('btn-run-corrosion');
      const obs = document.getElementById('corrosion-obs');
      let timerId = null, frame = 0, env = sel.value;

      function draw() {
        const W = canvas.width, H = canvas.height;
        ctx.clearRect(0, 0, W, H);
        // Draw 4 test tubes
        const tubes = [{x: 80, label: 'Air+Water'}, {x: 210, label: 'Oil Coated'}, {x: 340, label: 'Galvanized'}, {x: 470, label: 'Painted'}];
        tubes.forEach((t, idx) => {
          // Test tube
          ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 2;
          ctx.beginPath(); ctx.moveTo(t.x - 15, 60); ctx.lineTo(t.x - 15, 220);
          ctx.arc(t.x, 220, 15, Math.PI, 0, true); ctx.lineTo(t.x + 15, 60); ctx.stroke();
          // Water in tube 0
          if (idx === 0) { ctx.fillStyle = 'rgba(59, 130, 246, 0.2)'; ctx.fillRect(t.x - 13, 120, 26, 102); }
          // Nail
          const rustProgress = (idx === 0) ? Math.min(1, frame * 0.015) : 0;
          const nailColor = idx === 1 ? '#fbbf24' : idx === 2 ? '#94a3b8' : idx === 3 ? '#3b82f6' : `rgb(${100 + rustProgress*80}, ${116 - rustProgress*80}, ${139 - rustProgress*100})`;
          ctx.fillStyle = nailColor;
          ctx.fillRect(t.x - 3, 100, 6, 80);
          ctx.fillRect(t.x - 8, 100, 16, 4);
          // Rust flakes for tube 0
          if (idx === 0 && frame > 20) {
            ctx.fillStyle = `rgba(180, 83, 9, ${rustProgress})`;
            for (let j = 0; j < Math.min(10, frame/5); j++) {
              ctx.beginPath();
              ctx.arc(t.x - 2 + (j*3%8), 110 + j*6, 2, 0, 2*Math.PI);
              ctx.fill();
            }
          }
          // Label
          ctx.fillStyle = 'var(--text-muted)'; ctx.font = '9px system-ui';
          ctx.fillText(t.label, t.x - 20, 250);
        });
        // Day counter
        const day = Math.min(30, Math.floor(frame / 4));
        ctx.fillStyle = 'var(--accent-color)'; ctx.font = 'bold 14px system-ui';
        ctx.fillText('Day ' + day, 270, 30);
      }

      btn.addEventListener('click', () => {
        if (timerId) { clearInterval(timerId); timerId = null; btn.textContent = 'Start Time-Lapse ⏩'; return; }
        frame = 0; btn.textContent = 'Stop ⏹';
        timerId = setInterval(() => {
          frame++;
          draw();
          const day = Math.min(30, Math.floor(frame / 4));
          obs.innerHTML = `<strong>Day ${day}:</strong><br>
            • <strong>Air+Water tube:</strong> Iron nail shows ${day > 5 ? 'visible rust (Fe\u2082O\u2083·xH\u2082O)' : 'no change yet'}.<br>
            • <strong>Oil-coated:</strong> No rust — oil prevents contact with air/moisture.<br>
            • <strong>Galvanized:</strong> No rust — zinc coating sacrificially protects iron.<br>
            • <strong>Painted:</strong> No rust — paint acts as barrier.<br>
            <code>4Fe + 3O\u2082 + xH\u2082O \u2192 2Fe\u2082O\u2083·xH\u2082O (Rust)</code>`;
          if (frame > 120) { clearInterval(timerId); timerId = null; btn.textContent = 'Restart ⏩'; }
        }, 50);
      });
      draw();
    }

    function initPhotosynthesisLab() {
      const canvas = document.getElementById('photosynthesis-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const lightSlider = document.getElementById('light-intensity');
      const co2Btn = document.getElementById('btn-toggle-co2');
      const obs = document.getElementById('photo-obs');
      let co2On = true, animId = null;

      co2Btn.addEventListener('click', () => {
        co2On = !co2On;
        co2Btn.textContent = co2On ? 'CO\u2082 Supply: ON \u2705' : 'CO\u2082 Supply: OFF \u274C';
      });

      function draw() {
        const W = canvas.width, H = canvas.height;
        const light = parseInt(lightSlider.value);
        ctx.clearRect(0, 0, W, H);
        // Sky background
        const skyBright = Math.floor(30 + light * 2);
        ctx.fillStyle = `rgb(${skyBright}, ${skyBright + 50}, ${skyBright + 100})`;
        ctx.fillRect(0, 0, W, H);
        // Sun
        if (light > 20) {
          ctx.fillStyle = `rgba(251, 191, 36, ${light / 100})`;
          ctx.beginPath(); ctx.arc(500, 60, 20 + light/5, 0, 2*Math.PI); ctx.fill();
        }
        // Leaf (large cross-section)
        ctx.fillStyle = '#22c55e';
        ctx.beginPath();
        ctx.ellipse(W/2, H/2, 180, 80, 0, 0, 2*Math.PI);
        ctx.fill();
        ctx.strokeStyle = '#15803d'; ctx.lineWidth = 2; ctx.stroke();
        // Chloroplasts
        ctx.fillStyle = '#166534';
        for (let i = 0; i < 12; i++) {
          ctx.beginPath();
          ctx.ellipse(W/2 - 120 + i*22, H/2 - 20 + (i%3)*20, 8, 5, 0, 0, 2*Math.PI);
          ctx.fill();
        }
        // Stomata at bottom
        ctx.fillStyle = '#15803d';
        ctx.beginPath();
        ctx.ellipse(W/2, H/2 + 70, 12, 5, 0, 0, 2*Math.PI);
        ctx.fill();
        // CO2 arrows entering stomata
        if (co2On) {
          ctx.fillStyle = 'rgba(148, 163, 184, 0.7)';
          ctx.font = 'bold 10px system-ui';
          const tick = Date.now() / 200;
          for (let i = 0; i < 3; i++) {
            const y = H/2 + 90 - ((tick + i*20) % 40);
            ctx.fillText('CO\u2082\u2191', W/2 - 30 + i*25, y);
          }
        }
        // O2 bubbles rising
        const rate = co2On ? light / 10 : 0;
        ctx.fillStyle = 'rgba(59, 130, 246, 0.6)';
        const tick2 = Date.now() / 300;
        for (let i = 0; i < Math.floor(rate); i++) {
          const bx = W/2 - 60 + i*15;
          const by = H/2 - 30 - ((tick2 * 3 + i*12) % 80);
          ctx.beginPath(); ctx.arc(bx, by, 3, 0, 2*Math.PI); ctx.fill();
        }
        ctx.fillStyle = '#3b82f6'; ctx.font = 'bold 10px system-ui';
        if (rate > 0) ctx.fillText('O\u2082 \u2191', W/2 + 50, H/2 - 60);
        // Glucose forming
        if (rate > 3) {
          ctx.fillStyle = 'rgba(251, 191, 36, 0.8)'; ctx.font = 'bold 10px system-ui';
          ctx.fillText('Glucose \u2728', W/2 - 30, H/2 + 5);
        }
        // Observations
        obs.innerHTML = `<strong>Photosynthesis Monitor:</strong><br>
          • Light Intensity: <strong>${light}%</strong><br>
          • CO\u2082 Supply: <strong>${co2On ? 'Available' : 'Blocked'}</strong><br>
          • O\u2082 Production Rate: <strong>${rate.toFixed(1)} bubbles/sec</strong><br>
          • ${rate > 3 ? 'Glucose is being synthesized! \u2728' : rate > 0 ? 'Low rate — increase light or ensure CO\u2082.' : 'No photosynthesis — needs light AND CO\u2082.'}<br>
          <code>6CO\u2082 + 6H\u2082O + Light \u2192 C\u2086H\u2081\u2082O\u2086 + 6O\u2082</code>`;
        animId = requestAnimationFrame(draw);
      }
      draw();
    }

    function initHeartLab() {
      const canvas = document.getElementById('heart-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const rateSlider = document.getElementById('heart-rate');
      const bpmLabel = document.getElementById('heart-bpm');
      const obs = document.getElementById('heart-obs');

      function draw() {
        const W = canvas.width, H = canvas.height;
        const bpm = parseInt(rateSlider.value);
        bpmLabel.textContent = bpm + ' BPM';
        ctx.clearRect(0, 0, W, H);
        const t = Date.now() / (60000 / bpm);
        const phase = t % 1; // 0-1 cardiac cycle
        const cx = W/2, cy = H/2;
        // Heart outline
        ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(cx, cy + 60);
        ctx.bezierCurveTo(cx - 80, cy - 20, cx - 80, cy - 60, cx, cy - 30);
        ctx.bezierCurveTo(cx + 80, cy - 60, cx + 80, cy - 20, cx, cy + 60);
        ctx.stroke();
        // Four chambers
        const expand = phase < 0.3 ? phase/0.3 : phase < 0.5 ? 1 : 1 - (phase-0.5)/0.5;
        // Right atrium (deoxygenated - blue)
        ctx.fillStyle = `rgba(59, 130, 246, ${0.3 + expand * 0.4})`;
        ctx.fillRect(cx + 5, cy - 25, 30 + expand*5, 25);
        // Left atrium (oxygenated - red)
        ctx.fillStyle = `rgba(239, 68, 68, ${0.3 + expand * 0.4})`;
        ctx.fillRect(cx - 35 - expand*5, cy - 25, 30 + expand*5, 25);
        // Right ventricle (blue)
        ctx.fillStyle = `rgba(59, 130, 246, ${0.3 + (1-expand) * 0.4})`;
        ctx.fillRect(cx + 5, cy + 5, 30 + (1-expand)*5, 35);
        // Left ventricle (red)
        ctx.fillStyle = `rgba(239, 68, 68, ${0.3 + (1-expand) * 0.4})`;
        ctx.fillRect(cx - 35 - (1-expand)*5, cy + 5, 30 + (1-expand)*5, 35);
        // Labels
        ctx.fillStyle = 'var(--text-normal)'; ctx.font = 'bold 9px system-ui';
        ctx.fillText('RA', cx + 12, cy - 8);
        ctx.fillText('LA', cx - 28, cy - 8);
        ctx.fillText('RV', cx + 12, cy + 28);
        ctx.fillText('LV', cx - 28, cy + 28);
        // Vessels
        ctx.fillStyle = '#3b82f6'; ctx.font = '8px system-ui';
        ctx.fillText('Pulmonary Artery \u2192', cx + 45, cy - 15);
        ctx.fillText('\u2190 Vena Cava', cx + 45, cy + 20);
        ctx.fillStyle = '#ef4444';
        ctx.fillText('\u2190 Pulmonary Vein', cx - 120, cy - 15);
        ctx.fillText('Aorta \u2192', cx - 80, cy + 20);
        // Phase label
        const phaseName = phase < 0.3 ? 'Atrial Systole (Atria contract)' : phase < 0.5 ? 'Ventricular Systole (Ventricles contract)' : 'Diastole (All relax)';
        ctx.fillStyle = 'var(--accent-color)'; ctx.font = 'bold 12px system-ui';
        ctx.fillText(phaseName, cx - 80, cy + 80);
        obs.innerHTML = `<strong>Cardiac Cycle:</strong><br>
          • Heart Rate: <strong>${bpm} BPM</strong><br>
          • Phase: <strong>${phaseName}</strong><br>
          • Right side pumps <span style="color:#3b82f6">deoxygenated blood</span> to lungs.<br>
          • Left side pumps <span style="color:#ef4444">oxygenated blood</span> to body.`;
        requestAnimationFrame(draw);
      }
      rateSlider.addEventListener('input', () => {});
      draw();
    }

    function initReflexArcLab() {
      const canvas = document.getElementById('reflex-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const btn = document.getElementById('btn-reflex-trigger');
      const obs = document.getElementById('reflex-obs');
      let signal = -1; // -1 = not started

      const nodes = [
        {x: 80, y: 200, label: 'Hot Object \ud83d\udd25', r: 20},
        {x: 150, y: 200, label: 'Receptor', r: 15},
        {x: 250, y: 150, label: 'Sensory Nerve', r: 15},
        {x: 350, y: 80, label: 'Spinal Cord', r: 20},
        {x: 450, y: 150, label: 'Motor Nerve', r: 15},
        {x: 520, y: 200, label: 'Effector (Muscle)', r: 15}
      ];

      function draw() {
        const W = canvas.width, H = canvas.height;
        ctx.clearRect(0, 0, W, H);
        // Draw connections
        ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 3;
        for (let i = 0; i < nodes.length - 1; i++) {
          ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[i+1].x, nodes[i+1].y); ctx.stroke();
        }
        // Draw nodes
        nodes.forEach((n, i) => {
          const active = signal >= i;
          ctx.fillStyle = active ? (i <= 2 ? '#3b82f6' : i === 3 ? '#8b5cf6' : '#ef4444') : '#e2e8f0';
          ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, 2*Math.PI); ctx.fill();
          ctx.strokeStyle = active ? '#1e293b' : '#94a3b8'; ctx.lineWidth = 2; ctx.stroke();
          ctx.fillStyle = 'var(--text-normal)'; ctx.font = '9px system-ui';
          ctx.fillText(n.label, n.x - 25, n.y + n.r + 15);
          // Signal pulse
          if (signal === i) {
            ctx.strokeStyle = '#fbbf24'; ctx.lineWidth = 3;
            ctx.beginPath(); ctx.arc(n.x, n.y, n.r + 5 + Math.sin(Date.now()/100)*3, 0, 2*Math.PI); ctx.stroke();
          }
        });
        // Time display
        if (signal >= 0) {
          ctx.fillStyle = 'var(--accent-color)'; ctx.font = 'bold 12px system-ui';
          ctx.fillText('Signal at: ' + nodes[Math.min(signal, 5)].label, 200, 30);
        }
        // Hand pulling animation
        if (signal >= 5) {
          ctx.fillStyle = '#fbbf24'; ctx.font = 'bold 14px system-ui';
          ctx.fillText('\u2705 HAND PULLED BACK!', 350, 260);
        }
      }

      btn.addEventListener('click', () => {
        signal = 0;
        let step = 0;
        const steps = ['Stimulus detected! Receptor activated.', 'Signal travels along sensory nerve...', 'Signal travels along sensory nerve...', 'Spinal cord processes signal (no brain involved!)', 'Motor nerve carries response signal...', 'Effector (muscle) contracts - HAND PULLS BACK!'];
        const timer = setInterval(() => {
          signal = step;
          draw();
          obs.innerHTML = `<strong>Reflex Arc Step ${step + 1}/6:</strong><br>${steps[step]}<br><br><code>Stimulus \u2192 Receptor \u2192 Sensory Nerve \u2192 Spinal Cord \u2192 Motor Nerve \u2192 Effector</code>`;
          step++;
          if (step > 5) { clearInterval(timer); }
        }, 600);
      });
      draw();
    }

    function initHormoneLab() {
      const canvas = document.getElementById('hormone-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const slider = document.getElementById('blood-sugar');
      const valLabel = document.getElementById('sugar-val');
      const obs = document.getElementById('hormone-obs');

      function draw() {
        const W = canvas.width, H = canvas.height;
        const sugar = parseInt(slider.value);
        ctx.clearRect(0, 0, W, H);
        const status = sugar > 140 ? 'HIGH' : sugar < 70 ? 'LOW' : 'NORMAL';
        valLabel.textContent = sugar + ' mg/dL (' + status + ')';
        valLabel.style.color = status === 'NORMAL' ? 'var(--accent-color)' : '#ef4444';
        // Pancreas
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath(); ctx.ellipse(W/2, H/2, 60, 25, 0, 0, 2*Math.PI); ctx.fill();
        ctx.fillStyle = '#1e293b'; ctx.font = 'bold 11px system-ui';
        ctx.fillText('Pancreas', W/2 - 25, H/2 + 5);
        // Blood sugar bar
        const barH = (sugar / 200) * 200;
        ctx.fillStyle = status === 'NORMAL' ? '#22c55e' : '#ef4444';
        ctx.fillRect(50, 250 - barH, 30, barH);
        ctx.strokeStyle = '#94a3b8'; ctx.strokeRect(50, 50, 30, 200);
        ctx.fillStyle = 'var(--text-muted)'; ctx.font = '9px system-ui';
        ctx.fillText('Blood', 48, 270); ctx.fillText('Sugar', 48, 280);
        // Hormone arrows
        if (sugar > 140) {
          ctx.fillStyle = '#3b82f6'; ctx.font = 'bold 11px system-ui';
          ctx.fillText('Insulin \u2192', W/2 + 70, H/2 - 10);
          ctx.fillText('(Lowers sugar)', W/2 + 70, H/2 + 10);
          // Arrow to liver
          ctx.strokeStyle = '#3b82f6'; ctx.lineWidth = 2;
          ctx.beginPath(); ctx.moveTo(W/2 + 60, H/2); ctx.lineTo(W - 80, H/2); ctx.stroke();
          // Liver
          ctx.fillStyle = '#7c3aed';
          ctx.beginPath(); ctx.ellipse(W - 60, H/2, 30, 20, 0, 0, 2*Math.PI); ctx.fill();
          ctx.fillStyle = 'white'; ctx.font = '9px system-ui'; ctx.fillText('Liver', W - 72, H/2 + 4);
          ctx.fillText('stores glucose', W - 90, H/2 + 30);
        } else if (sugar < 70) {
          ctx.fillStyle = '#ef4444'; ctx.font = 'bold 11px system-ui';
          ctx.fillText('Glucagon \u2192', W/2 + 70, H/2 - 10);
          ctx.fillText('(Raises sugar)', W/2 + 70, H/2 + 10);
          ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 2;
          ctx.beginPath(); ctx.moveTo(W/2 + 60, H/2); ctx.lineTo(W - 80, H/2); ctx.stroke();
          ctx.fillStyle = '#7c3aed';
          ctx.beginPath(); ctx.ellipse(W - 60, H/2, 30, 20, 0, 0, 2*Math.PI); ctx.fill();
          ctx.fillStyle = 'white'; ctx.font = '9px system-ui'; ctx.fillText('Liver', W - 72, H/2 + 4);
          ctx.fillText('releases glucose', W - 95, H/2 + 30);
        }
        obs.innerHTML = `<strong>Feedback Loop:</strong><br>
          • Blood Sugar: <strong>${sugar} mg/dL (${status})</strong><br>
          • ${sugar > 140 ? 'Pancreas releases <strong>Insulin</strong> \u2192 Liver stores glucose \u2192 Sugar drops.' : sugar < 70 ? 'Pancreas releases <strong>Glucagon</strong> \u2192 Liver releases glucose \u2192 Sugar rises.' : 'Blood sugar is <strong>normal</strong>. No hormonal action needed.'}<br>
          • This is <strong>negative feedback</strong> — the response opposes the change.`;
      }
      slider.addEventListener('input', draw);
      draw();
    }

    function initPunnettLab() {
      const canvas = document.getElementById('punnett-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const sel1 = document.getElementById('sel-parent1');
      const sel2 = document.getElementById('sel-parent2');
      const btn = document.getElementById('btn-cross');
      const obs = document.getElementById('punnett-obs');

      function doCross() {
        const p1 = sel1.value, p2 = sel2.value;
        const a1 = p1[0], a2 = p1[1], b1 = p2[0], b2 = p2[1];
        const offspring = [a1+b1, a1+b2, a2+b1, a2+b2];
        const W = canvas.width, H = canvas.height;
        ctx.clearRect(0, 0, W, H);
        const sx = 180, sy = 60, cellW = 90, cellH = 60;
        // Header
        ctx.fillStyle = 'var(--accent-color)'; ctx.font = 'bold 16px system-ui';
        ctx.fillText('Punnett Square', sx + 20, 35);
        // Parent labels
        ctx.fillStyle = '#3b82f6'; ctx.font = 'bold 14px system-ui';
        ctx.fillText(b1, sx + cellW/2, sy - 5);
        ctx.fillText(b2, sx + cellW + cellW/2, sy - 5);
        ctx.fillText(a1, sx - 20, sy + cellH/2 + 5);
        ctx.fillText(a2, sx - 20, sy + cellH + cellH/2 + 5);
        // Grid
        ctx.strokeStyle = '#64748b'; ctx.lineWidth = 2;
        for (let r = 0; r < 2; r++) {
          for (let c = 0; c < 2; c++) {
            const x = sx + c*cellW, y = sy + r*cellH;
            const geno = offspring[r*2+c];
            const isTall = geno.includes('T');
            ctx.fillStyle = isTall ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)';
            ctx.fillRect(x, y, cellW, cellH);
            ctx.strokeRect(x, y, cellW, cellH);
            ctx.fillStyle = 'var(--text-normal)'; ctx.font = 'bold 18px system-ui';
            ctx.fillText(geno, x + cellW/2 - 10, y + cellH/2 + 7);
            // Plant icon
            ctx.font = '20px system-ui';
            ctx.fillText(isTall ? '\ud83c\udf31' : '\ud83c\udf3f', x + cellW - 30, y + cellH - 10);
          }
        }
        // Ratios
        const counts = {};
        offspring.forEach(g => { const key = g.split('').sort().join(''); counts[key] = (counts[key]||0) + 1; });
        let tall = 0, short = 0;
        offspring.forEach(g => { if (g.includes('T')) tall++; else short++; });
        obs.innerHTML = `<strong>Offspring Results:</strong><br>
          • Genotypes: ${Object.entries(counts).map(([k,v]) => k + ' = ' + v + '/4').join(', ')}<br>
          • Phenotype Ratio: <strong>${tall} Tall : ${short} Short</strong><br>
          • Tall% = ${(tall/4*100).toFixed(0)}%, Short% = ${(short/4*100).toFixed(0)}%`;
      }
      btn.addEventListener('click', doCross);
      doCross();
    }

    function initPrismLab() {
      const canvas = document.getElementById('prism-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const slider = document.getElementById('prism-angle');
      const angleLabel = document.getElementById('prism-angle-val');
      const obs = document.getElementById('prism-obs');

      function draw() {
        const W = canvas.width, H = canvas.height;
        const angle = parseInt(slider.value);
        angleLabel.textContent = angle + '°';
        ctx.clearRect(0, 0, W, H);
        // Dark background for visibility
        ctx.fillStyle = '#0f172a'; ctx.fillRect(0, 0, W, H);
        // Glass prism (triangle)
        const px = W/2, py = H/2;
        ctx.fillStyle = 'rgba(147, 197, 253, 0.15)';
        ctx.strokeStyle = 'rgba(147, 197, 253, 0.6)'; ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(px, py - 80); ctx.lineTo(px - 70, py + 50); ctx.lineTo(px + 70, py + 50);
        ctx.closePath(); ctx.fill(); ctx.stroke();
        ctx.fillStyle = 'rgba(147, 197, 253, 0.8)'; ctx.font = '10px system-ui';
        ctx.fillText('Glass Prism', px - 25, py + 10);
        // Incoming white light ray
        const incidentY = py - 10;
        ctx.strokeStyle = '#f8fafc'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(30, incidentY); ctx.lineTo(px - 40, incidentY); ctx.stroke();
        ctx.fillStyle = '#f8fafc'; ctx.font = 'bold 10px system-ui';
        ctx.fillText('White Light', 30, incidentY - 10);
        // VIBGYOR spectrum on exit
        const colors = ['#8b5cf6','#6366f1','#3b82f6','#22c55e','#eab308','#f97316','#ef4444'];
        const labels = ['V','I','B','G','Y','O','R'];
        const spread = (angle - 20) / 50 * 25;
        colors.forEach((c, i) => {
          ctx.strokeStyle = c; ctx.lineWidth = 2;
          const exitY = py - 10 + (i - 3) * spread;
          ctx.beginPath(); ctx.moveTo(px + 40, py); ctx.lineTo(W - 40, exitY); ctx.stroke();
          ctx.fillStyle = c; ctx.font = 'bold 10px system-ui';
          ctx.fillText(labels[i], W - 30, exitY + 4);
        });
        obs.innerHTML = `<strong>Prism Dispersion:</strong><br>
          • Angle of Incidence: <strong>${angle}°</strong><br>
          • White light splits into <strong>7 colors</strong> (VIBGYOR).<br>
          • Violet bends most (shortest wavelength), Red bends least.<br>
          • Dispersion = ${spread.toFixed(1)}° spread`;
      }
      slider.addEventListener('input', draw);
      draw();
    }

    function initOhmsLawLab() {
      const canvas = document.getElementById('ohms-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const vSlider = document.getElementById('ohms-voltage');
      const rSlider = document.getElementById('ohms-resistance');
      const vLabel = document.getElementById('ohms-v-val');
      const rLabel = document.getElementById('ohms-r-val');
      const obs = document.getElementById('ohms-obs');
      let dataPoints = [];

      function draw() {
        const W = canvas.width, H = canvas.height;
        const V = parseFloat(vSlider.value);
        const R = parseInt(rSlider.value);
        const I = V / R;
        vLabel.textContent = V.toFixed(1) + ' V';
        rLabel.textContent = R + ' \u03A9';
        ctx.clearRect(0, 0, W, H);
        // Circuit diagram (left half)
        const cx = 150, cy = H/2;
        // Battery
        ctx.fillStyle = '#94a3b8'; ctx.fillRect(cx - 40, cy - 80, 80, 20);
        ctx.fillStyle = '#1e293b'; ctx.font = 'bold 10px system-ui'; ctx.fillText(V.toFixed(1)+'V', cx - 10, cy - 65);
        // Wires
        ctx.strokeStyle = '#64748b'; ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy - 60); ctx.lineTo(cx, cy - 30);
        ctx.moveTo(cx, cy + 30); ctx.lineTo(cx, cy + 60);
        ctx.moveTo(cx - 40, cy - 80); ctx.lineTo(cx - 40, cy + 80);
        ctx.lineTo(cx + 40, cy + 80); ctx.lineTo(cx + 40, cy - 80);
        ctx.stroke();
        // Resistor
        ctx.fillStyle = 'rgba(251, 191, 36, 0.3)';
        ctx.fillRect(cx - 15, cy - 15, 30, 30);
        ctx.strokeStyle = '#f59e0b'; ctx.lineWidth = 2;
        ctx.strokeRect(cx - 15, cy - 15, 30, 30);
        ctx.fillStyle = '#1e293b'; ctx.font = 'bold 9px system-ui';
        ctx.fillText(R+'\u03A9', cx - 8, cy + 5);
        // Ammeter reading
        ctx.fillStyle = '#ef4444'; ctx.font = 'bold 12px system-ui';
        ctx.fillText('I = ' + I.toFixed(3) + ' A', cx - 30, cy + 100);
        // V-I Graph (right half)
        const gx = 340, gy = 40, gw = 220, gh = 220;
        ctx.strokeStyle = '#475569'; ctx.lineWidth = 1;
        ctx.strokeRect(gx, gy, gw, gh);
        // Axes labels
        ctx.fillStyle = 'var(--text-muted)'; ctx.font = '10px system-ui';
        ctx.fillText('V (Volts)', gx + gw/2 - 20, gy + gh + 25);
        ctx.save(); ctx.translate(gx - 15, gy + gh/2); ctx.rotate(-Math.PI/2);
        ctx.fillText('I (Amps)', -20, 0); ctx.restore();
        // Plot current data point
        dataPoints.push({v: V, i: I});
        if (dataPoints.length > 50) dataPoints.shift();
        // Grid lines
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.2)'; ctx.lineWidth = 0.5;
        for (let i = 0; i <= 6; i++) {
          ctx.beginPath(); ctx.moveTo(gx, gy + i*gh/6); ctx.lineTo(gx+gw, gy + i*gh/6); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(gx + i*gw/6, gy); ctx.lineTo(gx + i*gw/6, gy+gh); ctx.stroke();
        }
        // Plot points
        ctx.fillStyle = '#3b82f6';
        dataPoints.forEach(p => {
          const px = gx + (p.v / 12) * gw;
          const py = gy + gh - (p.i / 1.2) * gh;
          ctx.beginPath(); ctx.arc(px, py, 3, 0, 2*Math.PI); ctx.fill();
        });
        // Ideal line for current R
        ctx.strokeStyle = 'rgba(239, 68, 68, 0.5)'; ctx.lineWidth = 1; ctx.setLineDash([4,4]);
        ctx.beginPath(); ctx.moveTo(gx, gy + gh);
        ctx.lineTo(gx + gw, gy + gh - (12/R/1.2)*gh); ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = '#ef4444'; ctx.font = '9px system-ui';
        ctx.fillText('R='+R+'\u03A9 line', gx + gw - 60, gy + 15);
        obs.innerHTML = `<strong>Ohm's Law: V = IR</strong><br>
          • Voltage: <strong>${V.toFixed(1)} V</strong><br>
          • Resistance: <strong>${R} \u03A9</strong><br>
          • Current: <strong>${I.toFixed(4)} A</strong> = <strong>${(I*1000).toFixed(1)} mA</strong><br>
          • Power: <strong>${(V*I).toFixed(2)} W</strong>`;
      }
      vSlider.addEventListener('input', draw);
      rSlider.addEventListener('input', draw);
      draw();
    }

    function initElectricPowerLab() {
      const canvas = document.getElementById('epower-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const vSlider = document.getElementById('epower-voltage');
      const iSlider = document.getElementById('epower-current');
      const vLabel = document.getElementById('epower-v-val');
      const iLabel = document.getElementById('epower-i-val');
      const obs = document.getElementById('epower-obs');

      function draw() {
        const W = canvas.width, H = canvas.height;
        const V = parseFloat(vSlider.value), I = parseFloat(iSlider.value);
        const P = V * I, R = V / I;
        vLabel.textContent = V + ' V'; iLabel.textContent = I.toFixed(1) + ' A';
        ctx.clearRect(0, 0, W, H);
        // Filament bulb
        const glow = Math.min(1, P / 500);
        if (glow > 0.05) {
          const grad = ctx.createRadialGradient(W/2, H/2, 0, W/2, H/2, 60 + glow*40);
          grad.addColorStop(0, `rgba(251, 191, 36, ${glow})`);
          grad.addColorStop(0.5, `rgba(251, 191, 36, ${glow*0.3})`);
          grad.addColorStop(1, 'transparent');
          ctx.fillStyle = grad;
          ctx.beginPath(); ctx.arc(W/2, H/2, 80, 0, 2*Math.PI); ctx.fill();
        }
        // Bulb outline
        ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(W/2, H/2 - 10, 35, 0, 2*Math.PI); ctx.stroke();
        ctx.fillRect(W/2 - 12, H/2 + 25, 24, 15);
        // Filament
        ctx.strokeStyle = glow > 0.3 ? `rgba(251, 191, 36, ${glow})` : '#64748b'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(W/2 - 8, H/2 + 15); ctx.lineTo(W/2 - 5, H/2 - 15);
        ctx.lineTo(W/2 + 5, H/2 + 5); ctx.lineTo(W/2 + 8, H/2 - 20); ctx.stroke();
        // Power display
        ctx.fillStyle = 'var(--accent-color)'; ctx.font = 'bold 16px system-ui';
        ctx.fillText('P = ' + P.toFixed(0) + ' W', W/2 - 30, H - 30);
        obs.innerHTML = `<strong>Electric Power:</strong><br>
          • P = V \u00D7 I = ${V} \u00D7 ${I.toFixed(1)} = <strong>${P.toFixed(1)} W</strong><br>
          • P = I\u00B2R = ${I.toFixed(1)}\u00B2 \u00D7 ${R.toFixed(1)} = <strong>${(I*I*R).toFixed(1)} W</strong><br>
          • Energy in 1 hour: <strong>${(P/1000).toFixed(3)} kWh</strong> (${(P/1000).toFixed(3)} units)<br>
          • Filament glow intensity: <strong>${(glow*100).toFixed(0)}%</strong>`;
      }
      vSlider.addEventListener('input', draw);
      iSlider.addEventListener('input', draw);
      draw();
    }

    function initMagneticFieldLab() {
      const canvas = document.getElementById('magnetic-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const obs = document.getElementById('magnetic-obs');
      let compassX = 400, compassY = 170;
      let isDragging = false;

      function draw() {
        const W = canvas.width, H = canvas.height;
        ctx.clearRect(0, 0, W, H);
        const mx = W/2, my = H/2;
        // Bar magnet
        ctx.fillStyle = '#ef4444'; ctx.fillRect(mx - 60, my - 15, 60, 30);
        ctx.fillStyle = '#3b82f6'; ctx.fillRect(mx, my - 15, 60, 30);
        ctx.fillStyle = 'white'; ctx.font = 'bold 14px system-ui';
        ctx.fillText('N', mx - 40, my + 6); ctx.fillText('S', mx + 20, my + 6);
        // Field lines
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.4)'; ctx.lineWidth = 1;
        for (let i = -2; i <= 2; i++) {
          ctx.beginPath();
          for (let t = -3; t <= 3; t += 0.1) {
            const fx = mx + t * 50;
            const fy = my + i * 30 + Math.sin(t) * (20 + Math.abs(i)*15) * (i === 0 ? 0 : 1);
            if (t === -3) ctx.moveTo(fx, fy); else ctx.lineTo(fx, fy);
          }
          ctx.stroke();
        }
        // Compass
        const dx = compassX - mx, dy = compassY - my;
        const angle = Math.atan2(dy, dx) + Math.PI; // Points toward N pole
        ctx.save(); ctx.translate(compassX, compassY);
        ctx.beginPath(); ctx.arc(0, 0, 18, 0, 2*Math.PI);
        ctx.fillStyle = '#f8fafc'; ctx.fill(); ctx.strokeStyle = '#64748b'; ctx.lineWidth = 2; ctx.stroke();
        ctx.rotate(angle);
        ctx.fillStyle = '#ef4444'; ctx.beginPath(); ctx.moveTo(0, -12); ctx.lineTo(-4, 4); ctx.lineTo(4, 4); ctx.closePath(); ctx.fill();
        ctx.fillStyle = '#f8fafc'; ctx.beginPath(); ctx.moveTo(0, 12); ctx.lineTo(-4, -4); ctx.lineTo(4, -4); ctx.closePath(); ctx.fill();
        ctx.restore();
        ctx.fillStyle = 'var(--text-muted)'; ctx.font = '9px system-ui';
        ctx.fillText('Compass', compassX - 18, compassY + 30);
        obs.innerHTML = `<strong>Magnetic Field:</strong><br>
          • Compass needle aligns with the field direction.<br>
          • Field lines go from <span style="color:#ef4444">North</span> to <span style="color:#3b82f6">South</span> outside the magnet.<br>
          • Closer to magnet = stronger field = more aligned compass.`;
      }
      canvas.addEventListener('mousedown', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) * (canvas.width / rect.width);
        const y = (e.clientY - rect.top) * (canvas.height / rect.height);
        if (Math.hypot(x - compassX, y - compassY) < 25) isDragging = true;
      });
      canvas.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const rect = canvas.getBoundingClientRect();
        compassX = (e.clientX - rect.left) * (canvas.width / rect.width);
        compassY = (e.clientY - rect.top) * (canvas.height / rect.height);
        draw();
      });
      canvas.addEventListener('mouseup', () => isDragging = false);
      canvas.addEventListener('mouseleave', () => isDragging = false);
      draw();
    }

    function initFaradayLab() {
      const canvas = document.getElementById('faraday-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const obs = document.getElementById('faraday-obs');
      let magnetX = 150, isDragging = false, lastX = 150, emf = 0;

      function draw() {
        const W = canvas.width, H = canvas.height;
        ctx.clearRect(0, 0, W, H);
        const speed = magnetX - lastX;
        emf = speed * 0.5;
        lastX = magnetX;
        // Coil
        ctx.strokeStyle = '#f59e0b'; ctx.lineWidth = 3;
        for (let i = 0; i < 8; i++) {
          ctx.beginPath(); ctx.ellipse(W/2, H/2, 25, 50, 0, 0, Math.PI); ctx.stroke();
          ctx.beginPath(); ctx.ellipse(W/2 + i*4, H/2, 25, 50, 0, Math.PI, 2*Math.PI); ctx.stroke();
        }
        // Magnet
        ctx.fillStyle = '#ef4444'; ctx.fillRect(magnetX - 30, H/2 - 12, 30, 24);
        ctx.fillStyle = '#3b82f6'; ctx.fillRect(magnetX, H/2 - 12, 30, 24);
        ctx.fillStyle = 'white'; ctx.font = 'bold 10px system-ui';
        ctx.fillText('N', magnetX - 20, H/2 + 5); ctx.fillText('S', magnetX + 8, H/2 + 5);
        // Galvanometer
        ctx.beginPath(); ctx.arc(W/2, H - 50, 30, Math.PI, 0); ctx.stroke();
        ctx.strokeStyle = '#1e293b'; ctx.lineWidth = 2;
        const needleAngle = Math.PI + Math.min(Math.PI/3, Math.max(-Math.PI/3, emf * 0.1));
        ctx.beginPath();
        ctx.moveTo(W/2, H - 50);
        ctx.lineTo(W/2 + Math.cos(needleAngle)*25, H - 50 + Math.sin(needleAngle)*25);
        ctx.stroke();
        ctx.fillStyle = 'var(--text-muted)'; ctx.font = '9px system-ui';
        ctx.fillText('Galvanometer', W/2 - 30, H - 10);
        ctx.fillText('EMF: ' + Math.abs(emf).toFixed(1) + ' (arb.)', W/2 - 30, H - 70);
        obs.innerHTML = `<strong>Electromagnetic Induction:</strong><br>
          • Magnet speed: <strong>${Math.abs(speed).toFixed(1)}</strong><br>
          • Induced EMF: <strong>${Math.abs(emf).toFixed(2)}</strong> (proportional to speed)<br>
          • Direction: ${emf > 0.1 ? 'Clockwise' : emf < -0.1 ? 'Counter-clockwise' : 'No deflection'}<br>
          • <strong>Lenz\u2019s Law:</strong> Induced current opposes the change causing it.`;
        requestAnimationFrame(draw);
      }
      canvas.addEventListener('mousedown', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) * (canvas.width / rect.width);
        const y = (e.clientY - rect.top) * (canvas.height / rect.height);
        if (Math.abs(x - magnetX) < 40 && Math.abs(y - canvas.height/2) < 30) isDragging = true;
      });
      canvas.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const rect = canvas.getBoundingClientRect();
        magnetX = (e.clientX - rect.left) * (canvas.width / rect.width);
      });
      canvas.addEventListener('mouseup', () => isDragging = false);
      draw();
    }

    function initFoodWebLab() {
      const canvas = document.getElementById('foodweb-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const obs = document.getElementById('foodweb-obs');
      const organisms = [
        {name: 'Grass', emoji: '\ud83c\udf3e', x: 100, y: 280, level: 0, energy: 10000},
        {name: 'Trees', emoji: '\ud83c\udf33', x: 220, y: 280, level: 0, energy: 10000},
        {name: 'Grasshopper', emoji: '\ud83e\udeb3', x: 80, y: 190, level: 1, energy: 1000},
        {name: 'Rabbit', emoji: '\ud83d\udc07', x: 200, y: 190, level: 1, energy: 1000},
        {name: 'Deer', emoji: '\ud83e\udd8c', x: 320, y: 190, level: 1, energy: 1000},
        {name: 'Frog', emoji: '\ud83d\udc38', x: 120, y: 110, level: 2, energy: 100},
        {name: 'Snake', emoji: '\ud83d\udc0d', x: 260, y: 110, level: 2, energy: 100},
        {name: 'Eagle', emoji: '\ud83e\udd85', x: 200, y: 30, level: 3, energy: 10},
        {name: 'Lion', emoji: '\ud83e\udd81', x: 380, y: 110, level: 3, energy: 10}
      ];
      const links = [[0,2],[0,3],[1,4],[2,5],[3,6],[4,8],[5,6],[6,7],[5,7]];
      let selected = -1;

      function draw() {
        const W = canvas.width, H = canvas.height;
        ctx.clearRect(0, 0, W, H);
        // Trophic level bars
        const levels = ['Producers', 'Primary Consumers', 'Secondary Consumers', 'Tertiary Consumers'];
        const barWidths = [500, 350, 200, 80];
        levels.forEach((l, i) => {
          const bw = barWidths[i], bh = 15;
          const bx = W - 50 - bw, by = 275 - i*85;
          ctx.fillStyle = `rgba(34, 197, 94, ${0.15 + i*0.05})`;
          ctx.fillRect(bx, by, bw, bh);
          ctx.fillStyle = 'var(--text-muted)'; ctx.font = '8px system-ui';
          ctx.fillText(l + ' (10^' + (4-i) + ' J)', bx, by - 3);
        });
        // Links
        links.forEach(([a,b]) => {
          const from = organisms[a], to = organisms[b];
          const isHighlighted = selected === a || selected === b;
          ctx.strokeStyle = isHighlighted ? '#ef4444' : 'rgba(148, 163, 184, 0.3)';
          ctx.lineWidth = isHighlighted ? 2 : 1;
          ctx.beginPath(); ctx.moveTo(from.x, from.y); ctx.lineTo(to.x, to.y); ctx.stroke();
          // Arrow
          if (isHighlighted) {
            const mx = (from.x + to.x)/2, my = (from.y + to.y)/2;
            ctx.fillStyle = '#ef4444'; ctx.font = '10px system-ui'; ctx.fillText('\u2192', mx, my);
          }
        });
        // Organisms
        organisms.forEach((o, i) => {
          ctx.font = '24px system-ui';
          ctx.fillText(o.emoji, o.x - 12, o.y + 8);
          ctx.fillStyle = selected === i ? 'var(--accent-color)' : 'var(--text-normal)';
          ctx.font = 'bold 9px system-ui';
          ctx.fillText(o.name, o.x - 15, o.y + 25);
        });
      }
      canvas.addEventListener('click', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) * (canvas.width / rect.width);
        const y = (e.clientY - rect.top) * (canvas.height / rect.height);
        selected = organisms.findIndex(o => Math.hypot(x - o.x, y - o.y) < 25);
        draw();
        if (selected >= 0) {
          const o = organisms[selected];
          obs.innerHTML = `<strong>${o.emoji} ${o.name}:</strong><br>
            • Trophic Level: <strong>${o.level}</strong> (${['Producer','Primary Consumer','Secondary Consumer','Tertiary Consumer'][o.level]})<br>
            • Energy Available: <strong>${o.energy.toLocaleString()} J</strong><br>
            • <strong>10% Rule:</strong> Only 10% of energy transfers to the next level.`;
        }
      });
      draw();
    }

    function initMoleculeBuilderLab() {
      const canvas = document.getElementById('molecule-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const sel = document.getElementById('sel-molecule');
      const btn = document.getElementById('btn-build-molecule');
      const obs = document.getElementById('molecule-obs');

      const molecules = {
        methane: {name: 'Methane (CH\u2084)', atoms: [{el:'C',x:300,y:170,color:'#1e293b'},{el:'H',x:240,y:120,color:'#3b82f6'},{el:'H',x:360,y:120,color:'#3b82f6'},{el:'H',x:240,y:220,color:'#3b82f6'},{el:'H',x:360,y:220,color:'#3b82f6'}], bonds:[[0,1],[0,2],[0,3],[0,4]], info:'4 single bonds. Tetrahedral shape. Simplest hydrocarbon.'},
        ethene: {name: 'Ethene (C\u2082H\u2084)', atoms: [{el:'C',x:250,y:170,color:'#1e293b'},{el:'C',x:350,y:170,color:'#1e293b'},{el:'H',x:200,y:120,color:'#3b82f6'},{el:'H',x:200,y:220,color:'#3b82f6'},{el:'H',x:400,y:120,color:'#3b82f6'},{el:'H',x:400,y:220,color:'#3b82f6'}], bonds:[[0,1,'=',],[0,2],[0,3],[1,4],[1,5]], info:'C=C double bond. Planar molecule. Unsaturated hydrocarbon.'},
        ethyne: {name: 'Ethyne (C\u2082H\u2082)', atoms: [{el:'C',x:260,y:170,color:'#1e293b'},{el:'C',x:340,y:170,color:'#1e293b'},{el:'H',x:190,y:170,color:'#3b82f6'},{el:'H',x:410,y:170,color:'#3b82f6'}], bonds:[[0,1,'≡'],[0,2],[1,3]], info:'C\u2261C triple bond. Linear molecule. Highly unsaturated.'},
        ethanol: {name: 'Ethanol (C\u2082H\u2085OH)', atoms: [{el:'C',x:220,y:170,color:'#1e293b'},{el:'C',x:300,y:170,color:'#1e293b'},{el:'O',x:380,y:170,color:'#ef4444'},{el:'H',x:430,y:170,color:'#3b82f6'},{el:'H',x:180,y:120,color:'#3b82f6'},{el:'H',x:180,y:220,color:'#3b82f6'},{el:'H',x:220,y:120,color:'#3b82f6'},{el:'H',x:300,y:120,color:'#3b82f6'},{el:'H',x:300,y:220,color:'#3b82f6'}], bonds:[[0,1],[1,2],[2,3],[0,4],[0,5],[0,6],[1,7],[1,8]], info:'Contains -OH (hydroxyl) functional group. Used as a fuel and in beverages.'},
        ethanoic: {name: 'Ethanoic Acid (CH\u2083COOH)', atoms: [{el:'C',x:230,y:170,color:'#1e293b'},{el:'C',x:330,y:170,color:'#1e293b'},{el:'O',x:330,y:100,color:'#ef4444'},{el:'O',x:410,y:170,color:'#ef4444'},{el:'H',x:460,y:170,color:'#3b82f6'},{el:'H',x:180,y:120,color:'#3b82f6'},{el:'H',x:180,y:220,color:'#3b82f6'},{el:'H',x:230,y:120,color:'#3b82f6'}], bonds:[[0,1],[1,2,'='],[1,3],[3,4],[0,5],[0,6],[0,7]], info:'Contains -COOH (carboxyl) functional group. Vinegar is 5-8% solution.'}
      };

      function draw() {
        const mol = molecules[sel.value];
        const W = canvas.width, H = canvas.height;
        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = 'var(--accent-color)'; ctx.font = 'bold 14px system-ui';
        ctx.fillText(mol.name, 20, 30);
        // Bonds
        mol.bonds.forEach(b => {
          const a1 = mol.atoms[b[0]], a2 = mol.atoms[b[1]];
          ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 2;
          if (b[2] === '=') {
            ctx.beginPath(); ctx.moveTo(a1.x-3, a1.y-3); ctx.lineTo(a2.x-3, a2.y-3); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(a1.x+3, a1.y+3); ctx.lineTo(a2.x+3, a2.y+3); ctx.stroke();
          } else if (b[2] === '\u2261') {
            ctx.beginPath(); ctx.moveTo(a1.x, a1.y-4); ctx.lineTo(a2.x, a2.y-4); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(a1.x, a1.y); ctx.lineTo(a2.x, a2.y); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(a1.x, a1.y+4); ctx.lineTo(a2.x, a2.y+4); ctx.stroke();
          } else {
            ctx.beginPath(); ctx.moveTo(a1.x, a1.y); ctx.lineTo(a2.x, a2.y); ctx.stroke();
          }
        });
        // Atoms
        mol.atoms.forEach(a => {
          ctx.fillStyle = a.color;
          ctx.beginPath(); ctx.arc(a.x, a.y, a.el === 'H' ? 12 : 18, 0, 2*Math.PI); ctx.fill();
          ctx.fillStyle = 'white'; ctx.font = 'bold 12px system-ui';
          ctx.fillText(a.el, a.x - 5, a.y + 5);
        });
        obs.innerHTML = `<strong>${mol.name}:</strong><br>${mol.info}`;
      }
      btn.addEventListener('click', draw);
      sel.addEventListener('change', draw);
      draw();
    }

    function initMicelleLab() {
      const canvas = document.getElementById('micelle-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const btn = document.getElementById('btn-add-soap');
      const obs = document.getElementById('micelle-obs');
      let soapCount = 0;

      function draw() {
        const W = canvas.width, H = canvas.height;
        ctx.clearRect(0, 0, W, H);
        // Water background
        ctx.fillStyle = 'rgba(59, 130, 246, 0.1)'; ctx.fillRect(0, 0, W, H);
        // Oil droplet
        const oilR = Math.max(5, 40 - soapCount * 3);
        ctx.fillStyle = 'rgba(251, 191, 36, 0.6)';
        ctx.beginPath(); ctx.arc(W/2, H/2, oilR, 0, 2*Math.PI); ctx.fill();
        ctx.fillStyle = '#92400e'; ctx.font = '9px system-ui'; ctx.fillText('Oil', W/2 - 8, H/2 + 4);
        // Soap molecules around oil
        if (soapCount > 0) {
          for (let i = 0; i < Math.min(soapCount * 3, 24); i++) {
            const angle = (i / 24) * 2 * Math.PI;
            const r = oilR + 15;
            const sx = W/2 + Math.cos(angle) * r;
            const sy = H/2 + Math.sin(angle) * r;
            // Hydrophobic tail (pointing inward toward oil)
            ctx.strokeStyle = '#f59e0b'; ctx.lineWidth = 2;
            ctx.beginPath(); ctx.moveTo(sx, sy);
            ctx.lineTo(W/2 + Math.cos(angle) * (oilR + 5), H/2 + Math.sin(angle) * (oilR + 5));
            ctx.stroke();
            // Hydrophilic head (pointing outward toward water)
            ctx.fillStyle = '#3b82f6';
            ctx.beginPath(); ctx.arc(sx, sy, 4, 0, 2*Math.PI); ctx.fill();
          }
        }
        // Labels
        ctx.fillStyle = 'var(--text-muted)'; ctx.font = '10px system-ui';
        ctx.fillText('Water', 20, 20);
        if (soapCount > 0) {
          ctx.fillStyle = '#3b82f6'; ctx.font = 'bold 9px system-ui';
          ctx.fillText('Hydrophilic head (ionic)', W/2 + 60, H/2 - 50);
          ctx.fillStyle = '#f59e0b';
          ctx.fillText('Hydrophobic tail (hydrocarbon)', W/2 + 60, H/2 - 35);
        }
        obs.innerHTML = `<strong>Micelle Formation:</strong><br>
          • Soap molecules added: <strong>${soapCount}</strong><br>
          • ${soapCount === 0 ? 'Oil droplet is insoluble in water.' : soapCount < 5 ? 'Soap molecules begin surrounding the oil droplet.' : 'Micelle formed! Oil is encapsulated and can be washed away.'}<br>
          • Hydrophobic tails dissolve in oil, hydrophilic heads face water.`;
      }
      btn.addEventListener('click', () => { soapCount = Math.min(10, soapCount + 1); draw(); });
      draw();
    }

    function initCellDivisionLab() {
      const canvas = document.getElementById('celldiv-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const sel = document.getElementById('sel-organism');
      const btn = document.getElementById('btn-reproduce');
      const obs = document.getElementById('celldiv-obs');
      let timerId = null, frame = 0;

      function draw() {
        const W = canvas.width, H = canvas.height;
        const type = sel.value;
        ctx.clearRect(0, 0, W, H);
        const progress = Math.min(1, frame / 80);
        if (type === 'amoeba') {
          // Binary fission
          const stretch = progress * 40;
          const pinch = progress * 0.8;
          ctx.fillStyle = 'rgba(147, 197, 253, 0.5)';
          // Left cell
          ctx.beginPath(); ctx.ellipse(W/2 - stretch, H/2, 40 - pinch*15, 35, 0, 0, 2*Math.PI); ctx.fill();
          // Right cell
          if (progress > 0.3) {
            ctx.beginPath(); ctx.ellipse(W/2 + stretch, H/2, 40 - pinch*15, 35, 0, 0, 2*Math.PI); ctx.fill();
          }
          // Nucleus
          ctx.fillStyle = '#1e293b';
          ctx.beginPath(); ctx.arc(W/2 - stretch, H/2, 8, 0, 2*Math.PI); ctx.fill();
          if (progress > 0.5) { ctx.beginPath(); ctx.arc(W/2 + stretch, H/2, 8, 0, 2*Math.PI); ctx.fill(); }
          ctx.fillStyle = 'var(--text-normal)'; ctx.font = 'bold 11px system-ui';
          ctx.fillText('Amoeba - Binary Fission', W/2 - 60, 30);
        } else if (type === 'yeast') {
          // Budding
          ctx.fillStyle = 'rgba(251, 191, 36, 0.5)';
          ctx.beginPath(); ctx.arc(W/2, H/2, 30, 0, 2*Math.PI); ctx.fill();
          ctx.fillStyle = '#92400e'; ctx.beginPath(); ctx.arc(W/2, H/2, 8, 0, 2*Math.PI); ctx.fill();
          if (progress > 0.2) {
            const budR = 5 + progress * 15;
            ctx.fillStyle = 'rgba(251, 191, 36, 0.5)';
            ctx.beginPath(); ctx.arc(W/2 + 30 + budR, H/2 - 10, budR, 0, 2*Math.PI); ctx.fill();
            if (progress > 0.5) { ctx.fillStyle = '#92400e'; ctx.beginPath(); ctx.arc(W/2 + 30 + budR, H/2 - 10, 5, 0, 2*Math.PI); ctx.fill(); }
          }
          ctx.fillStyle = 'var(--text-normal)'; ctx.font = 'bold 11px system-ui';
          ctx.fillText('Yeast - Budding', W/2 - 40, 30);
        } else {
          // Fragmentation
          const segments = 5;
          const gap = progress * 15;
          ctx.fillStyle = 'rgba(34, 197, 94, 0.5)';
          for (let i = 0; i < segments; i++) {
            const sx = W/2 - 100 + i * (40 + gap);
            ctx.beginPath(); ctx.ellipse(sx, H/2, 18, 10, 0, 0, 2*Math.PI); ctx.fill();
          }
          ctx.fillStyle = 'var(--text-normal)'; ctx.font = 'bold 11px system-ui';
          ctx.fillText('Spirogyra - Fragmentation', W/2 - 60, 30);
        }
        const stage = progress < 0.3 ? 'Stage 1: Growth' : progress < 0.6 ? 'Stage 2: Division begins' : 'Stage 3: Separation complete';
        obs.innerHTML = `<strong>${sel.options[sel.selectedIndex].text}:</strong><br>• Progress: ${(progress*100).toFixed(0)}%<br>• ${stage}`;
      }

      btn.addEventListener('click', () => {
        if (timerId) clearInterval(timerId);
        frame = 0;
        timerId = setInterval(() => { frame++; draw(); if (frame > 80) { clearInterval(timerId); timerId = null; } }, 40);
      });
      draw();
    }

    function initMenstrualCycleLab() {
      const canvas = document.getElementById('menstrual-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const slider = document.getElementById('cycle-day');
      const dayLabel = document.getElementById('cycle-day-val');
      const obs = document.getElementById('menstrual-obs');

      function draw() {
        const W = canvas.width, H = canvas.height;
        const day = parseInt(slider.value);
        dayLabel.textContent = 'Day ' + day;
        ctx.clearRect(0, 0, W, H);
        // Hormone curves
        const hormones = [
          {name: 'Estrogen', color: '#ec4899', peak: 13, width: 8},
          {name: 'Progesterone', color: '#8b5cf6', peak: 21, width: 7},
          {name: 'FSH', color: '#3b82f6', peak: 5, width: 5},
          {name: 'LH', color: '#f59e0b', peak: 14, width: 3}
        ];
        const gx = 60, gy = 30, gw = W - 120, gh = 180;
        // Grid
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.2)'; ctx.lineWidth = 0.5;
        for (let d = 1; d <= 28; d++) {
          const x = gx + (d/28) * gw;
          ctx.beginPath(); ctx.moveTo(x, gy); ctx.lineTo(x, gy + gh); ctx.stroke();
        }
        // Day marker
        const dayX = gx + (day/28) * gw;
        ctx.fillStyle = 'rgba(239, 68, 68, 0.1)'; ctx.fillRect(dayX - 5, gy, 10, gh);
        ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 2; ctx.setLineDash([4,2]);
        ctx.beginPath(); ctx.moveTo(dayX, gy); ctx.lineTo(dayX, gy + gh); ctx.stroke();
        ctx.setLineDash([]);
        // Hormone curves
        hormones.forEach(h => {
          ctx.strokeStyle = h.color; ctx.lineWidth = 2;
          ctx.beginPath();
          for (let d = 1; d <= 28; d++) {
            const x = gx + (d/28) * gw;
            const dist = Math.abs(d - h.peak);
            const level = Math.exp(-(dist*dist)/(2*h.width*h.width));
            const y = gy + gh - level * (gh - 20);
            if (d === 1) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          }
          ctx.stroke();
        });
        // Legend
        hormones.forEach((h, i) => { ctx.fillStyle = h.color; ctx.font = 'bold 9px system-ui'; ctx.fillText(h.name, gx + i * 100, gy + gh + 20); });
        // Phase label
        const phase = day <= 5 ? 'Menstrual Phase' : day <= 13 ? 'Follicular Phase' : day === 14 ? 'Ovulation' : 'Luteal Phase';
        ctx.fillStyle = 'var(--accent-color)'; ctx.font = 'bold 14px system-ui';
        ctx.fillText(phase, gx, gy + gh + 45);
        // Uterine wall
        const wallY = gy + gh + 55, wallH = 30;
        const thickness = day <= 5 ? (5-day)/5 : day <= 14 ? (day-5)/9 : 1;
        ctx.fillStyle = 'rgba(239, 68, 68, 0.3)';
        ctx.fillRect(gx, wallY, gw, wallH * thickness);
        ctx.strokeStyle = '#94a3b8'; ctx.strokeRect(gx, wallY, gw, wallH);
        ctx.fillStyle = 'var(--text-muted)'; ctx.font = '8px system-ui'; ctx.fillText('Uterine Wall', gx, wallY + wallH + 12);
        obs.innerHTML = `<strong>Day ${day} — ${phase}:</strong><br>
          • ${day <= 5 ? 'Uterine lining breaks down. Menstrual bleeding occurs.' : day <= 13 ? 'FSH stimulates follicle growth. Estrogen rises, rebuilding uterine wall.' : day === 14 ? 'LH surge triggers ovulation! Egg released from ovary.' : 'Progesterone maintains thick uterine wall for potential implantation.'}`;
      }
      slider.addEventListener('input', draw);
      draw();
    }

    function initPrimeFactorLab() {
      const canvas = document.getElementById('prime-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const input = document.getElementById('prime-input');
      const btn = document.getElementById('btn-factorize');
      const obs = document.getElementById('prime-obs');

      function factorize(n) {
        const factors = [];
        let d = 2;
        while (d * d <= n) { while (n % d === 0) { factors.push(d); n /= d; } d++; }
        if (n > 1) factors.push(n);
        return factors;
      }

      function draw() {
        const num = parseInt(input.value) || 12;
        const W = canvas.width, H = canvas.height;
        ctx.clearRect(0, 0, W, H);
        const factors = factorize(num);
        // Draw tree
        ctx.fillStyle = 'var(--accent-color)'; ctx.font = 'bold 18px system-ui';
        ctx.fillText(num, W/2 - 10, 30);
        // Factor nodes
        const levels = [];
        let remaining = num;
        factors.forEach((f, i) => { levels.push({factor: f, quotient: remaining / f}); remaining /= f; });
        levels.forEach((l, i) => {
          const y = 60 + i * 45;
          const x1 = W/2 - 40, x2 = W/2 + 40;
          // Lines from parent
          ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(W/2, y - 15); ctx.lineTo(x1, y + 10); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(W/2, y - 15); ctx.lineTo(x2, y + 10); ctx.stroke();
          // Factor (prime - highlighted)
          ctx.fillStyle = '#22c55e'; ctx.beginPath(); ctx.arc(x1, y + 15, 15, 0, 2*Math.PI); ctx.fill();
          ctx.fillStyle = 'white'; ctx.font = 'bold 12px system-ui'; ctx.fillText(l.factor, x1 - 5, y + 20);
          // Quotient
          ctx.fillStyle = 'rgba(148, 163, 184, 0.3)'; ctx.beginPath(); ctx.arc(x2, y + 15, 15, 0, 2*Math.PI); ctx.fill();
          ctx.fillStyle = 'var(--text-normal)'; ctx.fillText(l.quotient, x2 - 8, y + 20);
        });
        // Result
        const primeStr = factors.join(' \u00D7 ');
        obs.innerHTML = `<strong>Prime Factorization of ${num}:</strong><br>
          • ${num} = <strong>${primeStr}</strong><br>
          • Number of prime factors: <strong>${factors.length}</strong><br>
          • Unique primes: <strong>${[...new Set(factors)].join(', ')}</strong>`;
      }
      btn.addEventListener('click', draw);
      draw();
    }

    function initPolynomialLab() {
      const canvas = document.getElementById('polynomial-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const aSlider = document.getElementById('poly-a');
      const bSlider = document.getElementById('poly-b');
      const cSlider = document.getElementById('poly-c');
      const aVal = document.getElementById('poly-a-val');
      const bVal = document.getElementById('poly-b-val');
      const cVal = document.getElementById('poly-c-val');
      const obs = document.getElementById('poly-obs');

      function draw() {
        const W = canvas.width, H = canvas.height;
        const a = parseFloat(aSlider.value), b = parseFloat(bSlider.value), c = parseFloat(cSlider.value);
        aVal.textContent = 'a = ' + a; bVal.textContent = 'b = ' + b; cVal.textContent = 'c = ' + c;
        ctx.clearRect(0, 0, W, H);
        const ox = W/2, oy = H/2, scale = 25;
        // Grid
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.15)'; ctx.lineWidth = 0.5;
        for (let i = -10; i <= 10; i++) {
          ctx.beginPath(); ctx.moveTo(ox + i*scale, 0); ctx.lineTo(ox + i*scale, H); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(0, oy + i*scale); ctx.lineTo(W, oy + i*scale); ctx.stroke();
        }
        // Axes
        ctx.strokeStyle = '#64748b'; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(0, oy); ctx.lineTo(W, oy); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(ox, 0); ctx.lineTo(ox, H); ctx.stroke();
        // Plot y = ax^2 + bx + c
        ctx.strokeStyle = '#3b82f6'; ctx.lineWidth = 2;
        ctx.beginPath();
        for (let px = 0; px < W; px++) {
          const x = (px - ox) / scale;
          const y = a*x*x + b*x + c;
          const py = oy - y * scale;
          if (px === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        ctx.stroke();
        // Find zeroes
        const D = b*b - 4*a*c;
        let zeroesText = '';
        if (a === 0) {
          zeroesText = b !== 0 ? 'Linear: one zero at x = ' + (-c/b).toFixed(2) : 'Constant function';
        } else if (D > 0) {
          const x1 = (-b + Math.sqrt(D))/(2*a), x2 = (-b - Math.sqrt(D))/(2*a);
          zeroesText = `Two zeroes: x = ${x1.toFixed(2)}, x = ${x2.toFixed(2)}`;
          // Mark zeroes
          [x1, x2].forEach(xz => {
            ctx.fillStyle = '#ef4444';
            ctx.beginPath(); ctx.arc(ox + xz*scale, oy, 5, 0, 2*Math.PI); ctx.fill();
          });
        } else if (D === 0) {
          const x1 = -b/(2*a);
          zeroesText = `One zero (repeated): x = ${x1.toFixed(2)}`;
          ctx.fillStyle = '#ef4444'; ctx.beginPath(); ctx.arc(ox + x1*scale, oy, 5, 0, 2*Math.PI); ctx.fill();
        } else {
          zeroesText = 'No real zeroes (D < 0)';
        }
        obs.innerHTML = `<strong>y = ${a}x\u00B2 + ${b}x + ${c}</strong><br>
          • Discriminant D = b\u00B2-4ac = ${D.toFixed(2)}<br>
          • ${zeroesText}<br>
          • Sum of zeroes = -b/a = ${a !== 0 ? (-b/a).toFixed(2) : 'N/A'}<br>
          • Product of zeroes = c/a = ${a !== 0 ? (c/a).toFixed(2) : 'N/A'}`;
      }
      [aSlider, bSlider, cSlider].forEach(s => s.addEventListener('input', draw));
      draw();
    }

    function initLinearEqLab() {
      const canvas = document.getElementById('lineq-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const btn = document.getElementById('btn-plot-lines');
      const obs = document.getElementById('lineq-obs');

      function draw() {
        const W = canvas.width, H = canvas.height;
        const a1 = parseFloat(document.getElementById('eq1-a').value)||1;
        const b1 = parseFloat(document.getElementById('eq1-b').value)||1;
        const c1 = parseFloat(document.getElementById('eq1-c').value)||0;
        const a2 = parseFloat(document.getElementById('eq2-a').value)||1;
        const b2 = parseFloat(document.getElementById('eq2-b').value)||1;
        const c2 = parseFloat(document.getElementById('eq2-c').value)||0;
        ctx.clearRect(0, 0, W, H);
        const ox = W/2, oy = H/2, scale = 25;
        // Grid + axes
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.15)'; ctx.lineWidth = 0.5;
        for (let i = -12; i <= 12; i++) {
          ctx.beginPath(); ctx.moveTo(ox + i*scale, 0); ctx.lineTo(ox + i*scale, H); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(0, oy + i*scale); ctx.lineTo(W, oy + i*scale); ctx.stroke();
        }
        ctx.strokeStyle = '#64748b'; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(0, oy); ctx.lineTo(W, oy); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(ox, 0); ctx.lineTo(ox, H); ctx.stroke();
        // Line 1: a1*x + b1*y = c1 => y = (c1 - a1*x) / b1
        if (b1 !== 0) {
          ctx.strokeStyle = '#3b82f6'; ctx.lineWidth = 2;
          ctx.beginPath();
          for (let px = 0; px < W; px++) {
            const x = (px - ox) / scale;
            const y = (c1 - a1*x) / b1;
            const py = oy - y * scale;
            if (px === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
          }
          ctx.stroke();
        }
        // Line 2
        if (b2 !== 0) {
          ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 2;
          ctx.beginPath();
          for (let px = 0; px < W; px++) {
            const x = (px - ox) / scale;
            const y = (c2 - a2*x) / b2;
            const py = oy - y * scale;
            if (px === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
          }
          ctx.stroke();
        }
        // Solve
        const det = a1*b2 - a2*b1;
        if (Math.abs(det) > 0.001) {
          const sx = (c1*b2 - c2*b1) / det;
          const sy = (a1*c2 - a2*c1) / det;
          ctx.fillStyle = '#22c55e';
          ctx.beginPath(); ctx.arc(ox + sx*scale, oy - sy*scale, 6, 0, 2*Math.PI); ctx.fill();
          ctx.fillStyle = 'var(--text-normal)'; ctx.font = 'bold 11px system-ui';
          ctx.fillText(`(${sx.toFixed(1)}, ${sy.toFixed(1)})`, ox + sx*scale + 10, oy - sy*scale - 10);
          obs.innerHTML = `<strong>Consistent System:</strong><br>
            • <span style="color:#3b82f6">Line 1:</span> ${a1}x + ${b1}y = ${c1}<br>
            • <span style="color:#ef4444">Line 2:</span> ${a2}x + ${b2}y = ${c2}<br>
            • Solution: <strong>x = ${sx.toFixed(2)}, y = ${sy.toFixed(2)}</strong><br>
            • The lines intersect at exactly one point.`;
        } else {
          obs.innerHTML = `<strong>${a1/a2 === b1/b2 && b1/b2 === c1/c2 ? 'Dependent (Infinite solutions — same line)' : 'Inconsistent (No solution — parallel lines)'}.</strong>`;
        }
      }
      btn.addEventListener('click', draw);
      draw();
    }

    function initTrigLab() {
      const canvas = document.getElementById('trig-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const slider = document.getElementById('trig-angle');
      const angleLabel = document.getElementById('trig-angle-val');
      const obs = document.getElementById('trig-obs');

      function draw() {
        const W = canvas.width, H = canvas.height;
        const deg = parseInt(slider.value);
        const rad = deg * Math.PI / 180;
        angleLabel.textContent = '\u03B8 = ' + deg + '°';
        ctx.clearRect(0, 0, W, H);
        const cx = 200, cy = H - 60, R = 150;
        // Unit circle
        ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.arc(cx, cy, R, 0, 2*Math.PI); ctx.stroke();
        // Axes
        ctx.strokeStyle = '#64748b'; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(cx - R - 20, cy); ctx.lineTo(cx + R + 20, cy); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(cx, cy + 20); ctx.lineTo(cx, cy - R - 20); ctx.stroke();
        // Triangle
        const px = cx + R * Math.cos(rad);
        const py = cy - R * Math.sin(rad);
        // Hypotenuse
        ctx.strokeStyle = 'var(--text-normal)'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, py); ctx.stroke();
        // Adjacent (cos line)
        ctx.strokeStyle = '#3b82f6'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, cy); ctx.stroke();
        // Opposite (sin line)
        ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(px, cy); ctx.lineTo(px, py); ctx.stroke();
        // Point on circle
        ctx.fillStyle = '#22c55e'; ctx.beginPath(); ctx.arc(px, py, 5, 0, 2*Math.PI); ctx.fill();
        // Angle arc
        ctx.strokeStyle = '#f59e0b'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(cx, cy, 30, -rad, 0); ctx.stroke();
        ctx.fillStyle = '#f59e0b'; ctx.font = 'bold 12px system-ui'; ctx.fillText('\u03B8', cx + 35, cy - 10);
        // Labels
        ctx.fillStyle = '#3b82f6'; ctx.font = 'bold 11px system-ui';
        ctx.fillText('cos\u03B8 = ' + Math.cos(rad).toFixed(4), 20, 30);
        ctx.fillStyle = '#ef4444';
        ctx.fillText('sin\u03B8 = ' + Math.sin(rad).toFixed(4), 20, 50);
        ctx.fillStyle = '#f59e0b';
        const tanVal = deg === 90 ? '\u221E' : Math.tan(rad).toFixed(4);
        ctx.fillText('tan\u03B8 = ' + tanVal, 20, 70);
        // Values table
        const known = {0:'0', 30:'30', 45:'45', 60:'60', 90:'90'};
        obs.innerHTML = `<strong>\u03B8 = ${deg}°:</strong><br>
          • <span style="color:#3b82f6">cos ${deg}° = ${Math.cos(rad).toFixed(4)}</span><br>
          • <span style="color:#ef4444">sin ${deg}° = ${Math.sin(rad).toFixed(4)}</span><br>
          • <span style="color:#f59e0b">tan ${deg}° = ${tanVal}</span><br>
          • sin\u00B2\u03B8 + cos\u00B2\u03B8 = ${(Math.sin(rad)**2 + Math.cos(rad)**2).toFixed(6)} \u2248 1 \u2705`;
      }
      slider.addEventListener('input', draw);
      draw();
    }

    function initProbabilityLab() {
      const canvas = document.getElementById('probability-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const sel = document.getElementById('sel-prob-type');
      const btn1 = document.getElementById('btn-roll');
      const btn100 = document.getElementById('btn-roll-100');
      const obs = document.getElementById('prob-obs');
      let results = {coin: {heads:0, tails:0}, dice: {1:0,2:0,3:0,4:0,5:0,6:0}};

      function draw() {
        const W = canvas.width, H = canvas.height;
        const type = sel.value;
        ctx.clearRect(0, 0, W, H);
        if (type === 'coin') {
          const total = results.coin.heads + results.coin.tails;
          const barW = 80, maxH = 200;
          // Heads bar
          const hH = total > 0 ? (results.coin.heads / total) * maxH : 0;
          ctx.fillStyle = '#3b82f6'; ctx.fillRect(150, H - 40 - hH, barW, hH);
          ctx.fillStyle = 'var(--text-normal)'; ctx.font = 'bold 10px system-ui';
          ctx.fillText('Heads: ' + results.coin.heads, 155, H - 45 - hH);
          // Tails bar
          const tH = total > 0 ? (results.coin.tails / total) * maxH : 0;
          ctx.fillStyle = '#ef4444'; ctx.fillRect(350, H - 40 - tH, barW, tH);
          ctx.fillText('Tails: ' + results.coin.tails, 355, H - 45 - tH);
          // Theoretical line at 50%
          if (total > 0) {
            ctx.strokeStyle = '#22c55e'; ctx.lineWidth = 1; ctx.setLineDash([4,4]);
            ctx.beginPath(); ctx.moveTo(130, H - 40 - maxH/2); ctx.lineTo(450, H - 40 - maxH/2); ctx.stroke();
            ctx.setLineDash([]); ctx.fillStyle = '#22c55e'; ctx.font = '9px system-ui'; ctx.fillText('50% (Theoretical)', 455, H - 40 - maxH/2);
          }
          ctx.fillStyle = 'var(--text-normal)'; ctx.font = 'bold 12px system-ui';
          ctx.fillText('Total Flips: ' + total, 220, 30);
        } else {
          const total = Object.values(results.dice).reduce((s,v)=>s+v, 0);
          const barW = 60, maxH = 180;
          for (let face = 1; face <= 6; face++) {
            const x = 40 + (face-1) * 90;
            const h = total > 0 ? (results.dice[face] / total) * maxH : 0;
            ctx.fillStyle = `hsl(${face * 50}, 70%, 60%)`;
            ctx.fillRect(x, H - 50 - h, barW, h);
            ctx.fillStyle = 'var(--text-normal)'; ctx.font = 'bold 10px system-ui';
            ctx.fillText(face + ': ' + results.dice[face], x + 10, H - 30);
          }
          if (total > 0) {
            ctx.strokeStyle = '#22c55e'; ctx.lineWidth = 1; ctx.setLineDash([4,4]);
            ctx.beginPath(); ctx.moveTo(30, H - 50 - maxH/6); ctx.lineTo(W - 30, H - 50 - maxH/6); ctx.stroke();
            ctx.setLineDash([]); ctx.fillStyle = '#22c55e'; ctx.font = '9px system-ui'; ctx.fillText('16.67% each (Theoretical)', W - 150, H - 50 - maxH/6 - 5);
          }
          ctx.fillStyle = 'var(--text-normal)'; ctx.font = 'bold 12px system-ui';
          ctx.fillText('Total Rolls: ' + total, 230, 25);
        }
      }

      function doTrial(n) {
        const type = sel.value;
        for (let i = 0; i < n; i++) {
          if (type === 'coin') {
            Math.random() < 0.5 ? results.coin.heads++ : results.coin.tails++;
          } else {
            results.dice[Math.floor(Math.random()*6)+1]++;
          }
        }
        draw();
        const total = type === 'coin' ? results.coin.heads + results.coin.tails : Object.values(results.dice).reduce((s,v)=>s+v,0);
        if (type === 'coin') {
          obs.innerHTML = `<strong>Coin Toss (${total} trials):</strong><br>
            • P(Heads) experimental = ${(results.coin.heads/total).toFixed(4)}<br>
            • P(Heads) theoretical = 0.5000<br>
            • ${total > 50 ? 'Notice how experimental approaches theoretical!' : 'Try more flips to see convergence.'}`;
        } else {
          obs.innerHTML = `<strong>Dice Roll (${total} trials):</strong><br>
            • P(each face) theoretical = 1/6 = 0.1667<br>
            • ${total > 100 ? 'Frequencies are converging to 1/6 each!' : 'Roll more to see the law of large numbers.'}`;
        }
      }
      btn1.addEventListener('click', () => doTrial(1));
      btn100.addEventListener('click', () => doTrial(100));
      sel.addEventListener('change', () => { results = {coin:{heads:0,tails:0}, dice:{1:0,2:0,3:0,4:0,5:0,6:0}}; draw(); });
      draw();
    }

    function initCoordinateLab() {
      const canvas = document.getElementById('coord-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const ratioSlider = document.getElementById('section-ratio');
      const ratioLabel = document.getElementById('section-val');
      const pointsLabel = document.getElementById('coord-points');
      const obs = document.getElementById('coord-obs');
      let ax = 2, ay = 3, bx = 7, by = 6;
      let dragging = null;

      function draw() {
        const W = canvas.width, H = canvas.height;
        const m = parseInt(ratioSlider.value);
        ratioLabel.textContent = m + ' : 1' + (m === 1 ? ' (Midpoint)' : '');
        pointsLabel.textContent = `A(${ax}, ${ay}) and B(${bx}, ${by})`;
        ctx.clearRect(0, 0, W, H);
        const ox = 40, oy = H - 40, scale = 30;
        // Grid
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.15)'; ctx.lineWidth = 0.5;
        for (let i = 0; i <= 18; i++) { ctx.beginPath(); ctx.moveTo(ox + i*scale, 0); ctx.lineTo(ox + i*scale, H); ctx.stroke(); }
        for (let i = 0; i <= 10; i++) { ctx.beginPath(); ctx.moveTo(0, oy - i*scale); ctx.lineTo(W, oy - i*scale); ctx.stroke(); }
        // Axes
        ctx.strokeStyle = '#64748b'; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(ox, 0); ctx.lineTo(ox, H); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, oy); ctx.lineTo(W, oy); ctx.stroke();
        // Line AB
        ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(ox + ax*scale, oy - ay*scale); ctx.lineTo(ox + bx*scale, oy - by*scale); ctx.stroke();
        // Point A
        ctx.fillStyle = '#3b82f6'; ctx.beginPath(); ctx.arc(ox + ax*scale, oy - ay*scale, 6, 0, 2*Math.PI); ctx.fill();
        ctx.fillStyle = '#3b82f6'; ctx.font = 'bold 11px system-ui'; ctx.fillText(`A(${ax},${ay})`, ox + ax*scale + 8, oy - ay*scale - 8);
        // Point B
        ctx.fillStyle = '#ef4444'; ctx.beginPath(); ctx.arc(ox + bx*scale, oy - by*scale, 6, 0, 2*Math.PI); ctx.fill();
        ctx.fillStyle = '#ef4444'; ctx.fillText(`B(${bx},${by})`, ox + bx*scale + 8, oy - by*scale - 8);
        // Section point
        const sx = (m*bx + 1*ax) / (m + 1), sy = (m*by + 1*ay) / (m + 1);
        ctx.fillStyle = '#22c55e'; ctx.beginPath(); ctx.arc(ox + sx*scale, oy - sy*scale, 5, 0, 2*Math.PI); ctx.fill();
        ctx.fillText(`P(${sx.toFixed(1)},${sy.toFixed(1)})`, ox + sx*scale + 8, oy - sy*scale - 8);
        // Distance
        const dist = Math.sqrt((bx-ax)**2 + (by-ay)**2);
        obs.innerHTML = `<strong>Distance Formula:</strong><br>
          • AB = \u221A[(${bx}-${ax})\u00B2 + (${by}-${ay})\u00B2] = <strong>${dist.toFixed(3)}</strong><br><br>
          <strong>Section Formula (${m}:1):</strong><br>
          • P = (${sx.toFixed(2)}, ${sy.toFixed(2)})`;
      }
      canvas.addEventListener('mousedown', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) * (canvas.width / rect.width);
        const y = (e.clientY - rect.top) * (canvas.height / rect.height);
        const ox = 40, oy = canvas.height - 40, scale = 30;
        if (Math.hypot(x - (ox+ax*scale), y - (oy-ay*scale)) < 15) dragging = 'a';
        else if (Math.hypot(x - (ox+bx*scale), y - (oy-by*scale)) < 15) dragging = 'b';
      });
      canvas.addEventListener('mousemove', (e) => {
        if (!dragging) return;
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) * (canvas.width / rect.width);
        const y = (e.clientY - rect.top) * (canvas.height / rect.height);
        const ox = 40, oy = canvas.height - 40, scale = 30;
        const nx = Math.round((x - ox) / scale), ny = Math.round((oy - y) / scale);
        if (dragging === 'a') { ax = Math.max(0, Math.min(15, nx)); ay = Math.max(0, Math.min(9, ny)); }
        else { bx = Math.max(0, Math.min(15, nx)); by = Math.max(0, Math.min(9, ny)); }
        draw();
      });
      canvas.addEventListener('mouseup', () => dragging = null);
      ratioSlider.addEventListener('input', draw);
      draw();
    }

    function initAPLab() {
      const canvas = document.getElementById('ap-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const aSlider = document.getElementById('ap-a');
      const dSlider = document.getElementById('ap-d');
      const nSlider = document.getElementById('ap-n');
      const aVal = document.getElementById('ap-a-val');
      const dVal = document.getElementById('ap-d-val');
      const nVal = document.getElementById('ap-n-val');
      const obs = document.getElementById('ap-obs');

      function draw() {
        const W = canvas.width, H = canvas.height;
        const a = parseInt(aSlider.value), d = parseInt(dSlider.value), n = parseInt(nSlider.value);
        aVal.textContent = 'a = ' + a; dVal.textContent = 'd = ' + d; nVal.textContent = 'n = ' + n;
        ctx.clearRect(0, 0, W, H);
        // Compute terms
        const terms = [];
        for (let i = 0; i < n; i++) terms.push(a + i * d);
        const maxVal = Math.max(...terms.map(Math.abs), 1);
        const barW = Math.min(40, (W - 80) / n - 5);
        const colors = ['#3b82f6','#8b5cf6','#ec4899','#ef4444','#f59e0b','#22c55e','#06b6d4','#6366f1','#14b8a6','#f97316','#84cc16','#e879f9','#fb923c','#2dd4bf','#a78bfa'];
        terms.forEach((t, i) => {
          const x = 50 + i * ((W - 80) / n);
          const barH = (Math.abs(t) / maxVal) * 200;
          const y = t >= 0 ? 260 - barH : 260;
          ctx.fillStyle = colors[i % colors.length];
          ctx.fillRect(x, y, barW, barH);
          ctx.fillStyle = 'var(--text-normal)'; ctx.font = 'bold 9px system-ui';
          ctx.fillText('a' + (i+1), x + barW/2 - 5, 280);
          ctx.fillText(t, x + barW/2 - 5, t >= 0 ? y - 5 : y + barH + 12);
        });
        // Axis line
        ctx.strokeStyle = '#64748b'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(40, 260); ctx.lineTo(W - 20, 260); ctx.stroke();
        // Sum
        const S = (n / 2) * (2 * a + (n - 1) * d);
        const an = a + (n - 1) * d;
        obs.innerHTML = `<strong>AP: ${terms.slice(0, 5).join(', ')}${n > 5 ? ', ...' : ''}</strong><br>
          • a\u2081 = ${a}, d = ${d}, n = ${n}<br>
          • a\u2099 = a + (n-1)d = ${a} + ${n-1}\u00D7${d} = <strong>${an}</strong><br>
          • S\u2099 = n/2[2a+(n-1)d] = ${n}/2[${2*a}+${(n-1)*d}] = <strong>${S}</strong>`;
      }
      [aSlider, dSlider, nSlider].forEach(s => s.addEventListener('input', draw));
      draw();
    }

    function initTangentLab() {
      const canvas = document.getElementById('tangent-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const rSlider = document.getElementById('tangent-radius');
      const rLabel = document.getElementById('tangent-r-val');
      const obs = document.getElementById('tangent-obs');
      let px = 450, py = 170;
      let dragging = false;

      function draw() {
        const W = canvas.width, H = canvas.height;
        const r = parseInt(rSlider.value);
        rLabel.textContent = 'r = ' + r;
        ctx.clearRect(0, 0, W, H);
        const cx = 250, cy = 170;
        // Circle
        ctx.strokeStyle = '#3b82f6'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(cx, cy, r, 0, 2*Math.PI); ctx.stroke();
        ctx.fillStyle = '#3b82f6'; ctx.beginPath(); ctx.arc(cx, cy, 3, 0, 2*Math.PI); ctx.fill();
        ctx.fillStyle = 'var(--text-muted)'; ctx.font = '9px system-ui'; ctx.fillText('O', cx - 10, cy + 15);
        // External point
        const dist = Math.hypot(px - cx, py - cy);
        ctx.fillStyle = '#ef4444'; ctx.beginPath(); ctx.arc(px, py, 5, 0, 2*Math.PI); ctx.fill();
        ctx.fillStyle = '#ef4444'; ctx.font = 'bold 10px system-ui'; ctx.fillText('P', px + 8, py - 8);
        // Tangent lines (if point is outside circle)
        if (dist > r) {
          const tangentLen = Math.sqrt(dist*dist - r*r);
          const angle = Math.atan2(py - cy, px - cx);
          const halfAngle = Math.acos(r / dist);
          // Two tangent points
          const t1x = cx + r * Math.cos(angle + halfAngle);
          const t1y = cy + r * Math.sin(angle + halfAngle);
          const t2x = cx + r * Math.cos(angle - halfAngle);
          const t2y = cy + r * Math.sin(angle - halfAngle);
          // Draw tangent lines
          ctx.strokeStyle = '#22c55e'; ctx.lineWidth = 2;
          ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(t1x, t1y); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(t2x, t2y); ctx.stroke();
          // Tangent points
          ctx.fillStyle = '#22c55e';
          ctx.beginPath(); ctx.arc(t1x, t1y, 4, 0, 2*Math.PI); ctx.fill();
          ctx.beginPath(); ctx.arc(t2x, t2y, 4, 0, 2*Math.PI); ctx.fill();
          obs.innerHTML = `<strong>Tangent Properties:</strong><br>
            • OP = ${dist.toFixed(1)}, r = ${r}<br>
            • Tangent length = \u221A(OP\u00B2 - r\u00B2) = <strong>${tangentLen.toFixed(1)}</strong><br>
            • Both tangent lengths are <strong>equal</strong> \u2705<br>
            • Tangent \u22A5 Radius at point of contact.`;
        } else {
          obs.innerHTML = '<strong>Point P is inside the circle.</strong><br>Drag P outside to see tangent lines.';
        }
      }
      canvas.addEventListener('mousedown', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) * (canvas.width / rect.width);
        const y = (e.clientY - rect.top) * (canvas.height / rect.height);
        if (Math.hypot(x - px, y - py) < 15) dragging = true;
      });
      canvas.addEventListener('mousemove', (e) => {
        if (!dragging) return;
        const rect = canvas.getBoundingClientRect();
        px = (e.clientX - rect.left) * (canvas.width / rect.width);
        py = (e.clientY - rect.top) * (canvas.height / rect.height);
        draw();
      });
      canvas.addEventListener('mouseup', () => dragging = false);
      rSlider.addEventListener('input', draw);
      draw();
    }

    function initSectorLab() {
      const canvas = document.getElementById('sector-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const angleSlider = document.getElementById('sector-angle');
      const rSlider = document.getElementById('sector-radius');
      const angleLabel = document.getElementById('sector-angle-val');
      const rLabel = document.getElementById('sector-r-val');
      const obs = document.getElementById('sector-obs');

      function draw() {
        const W = canvas.width, H = canvas.height;
        const theta = parseInt(angleSlider.value);
        const r = parseInt(rSlider.value);
        angleLabel.textContent = '\u03B8 = ' + theta + '°';
        rLabel.textContent = 'r = ' + r;
        ctx.clearRect(0, 0, W, H);
        const cx = W/2, cy = H/2;
        const rad = theta * Math.PI / 180;
        // Full circle (faint)
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.3)'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.arc(cx, cy, r, 0, 2*Math.PI); ctx.stroke();
        // Sector
        ctx.fillStyle = 'rgba(59, 130, 246, 0.3)';
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, r, 0, rad); ctx.closePath(); ctx.fill();
        ctx.strokeStyle = '#3b82f6'; ctx.lineWidth = 2; ctx.stroke();
        // Segment (sector - triangle)
        ctx.fillStyle = 'rgba(239, 68, 68, 0.2)';
        ctx.beginPath(); ctx.arc(cx, cy, r, 0, rad);
        ctx.lineTo(cx, cy); ctx.closePath(); ctx.fill();
        // Labels
        ctx.fillStyle = '#3b82f6'; ctx.font = 'bold 10px system-ui';
        ctx.fillText('Sector', cx + r/3, cy - 15);
        // Angle arc
        ctx.strokeStyle = '#f59e0b'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(cx, cy, 20, 0, rad); ctx.stroke();
        ctx.fillStyle = '#f59e0b'; ctx.font = '10px system-ui'; ctx.fillText(theta + '°', cx + 25, cy - 5);
        // Calculations
        const sectorArea = (theta / 360) * Math.PI * r * r;
        const arcLen = (theta / 360) * 2 * Math.PI * r;
        const triangleArea = 0.5 * r * r * Math.sin(rad);
        const segmentArea = sectorArea - triangleArea;
        obs.innerHTML = `<strong>\u03B8 = ${theta}°, r = ${r}:</strong><br>
          • <span style="color:#3b82f6">Area of Sector</span> = (\u03B8/360)\u03C0r\u00B2 = <strong>${sectorArea.toFixed(2)}</strong> sq units<br>
          • Arc Length = (\u03B8/360)\u00D72\u03C0r = <strong>${arcLen.toFixed(2)}</strong> units<br>
          • <span style="color:#ef4444">Area of Segment</span> = Sector - Triangle = <strong>${segmentArea.toFixed(2)}</strong> sq units`;
      }
      angleSlider.addEventListener('input', draw);
      rSlider.addEventListener('input', draw);
      draw();
    }

    function initStatsLab() {
      const canvas = document.getElementById('stats-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const sel = document.getElementById('sel-stats-data');
      const btn = document.getElementById('btn-plot-stats');
      const obs = document.getElementById('stats-obs');

      const datasets = {
        marks: {classes: ['0-10','10-20','20-30','30-40','40-50'], freq: [5, 8, 15, 16, 6]},
        income: {classes: ['10-20','20-30','30-40','40-50','50-60'], freq: [4, 9, 18, 12, 7]},
        height: {classes: ['140-150','150-160','160-170','170-180','180-190'], freq: [3, 10, 22, 12, 3]}
      };

      function draw() {
        const data = datasets[sel.value];
        const W = canvas.width, H = canvas.height;
        ctx.clearRect(0, 0, W, H);
        const n = data.classes.length;
        const barW = (W - 120) / n;
        const maxF = Math.max(...data.freq);
        const totalF = data.freq.reduce((s,v)=>s+v, 0);
        // Bars
        data.freq.forEach((f, i) => {
          const h = (f / maxF) * 230;
          const x = 60 + i * barW;
          ctx.fillStyle = `hsl(${200 + i*30}, 70%, 60%)`;
          ctx.fillRect(x, 270 - h, barW - 5, h);
          ctx.fillStyle = 'var(--text-normal)'; ctx.font = 'bold 10px system-ui';
          ctx.fillText(f, x + barW/2 - 5, 265 - h);
          ctx.font = '8px system-ui'; ctx.fillText(data.classes[i], x, 285);
        });
        // Mean
        let sumFX = 0;
        data.freq.forEach((f, i) => {
          const mid = parseFloat(data.classes[i].split('-')[0]) + 5;
          sumFX += f * mid;
        });
        const mean = sumFX / totalF;
        // Mode (class with highest freq)
        const modeIdx = data.freq.indexOf(maxF);
        const modeClass = data.classes[modeIdx];
        // Median
        let cumF = 0, medianClass = '';
        for (let i = 0; i < n; i++) { cumF += data.freq[i]; if (cumF >= totalF/2) { medianClass = data.classes[i]; break; } }
        // Mean line
        const meanX = 60 + ((mean - parseFloat(data.classes[0].split('-')[0])) / (parseFloat(data.classes[n-1].split('-')[1]) - parseFloat(data.classes[0].split('-')[0]))) * (barW * n);
        ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 2; ctx.setLineDash([4,2]);
        ctx.beginPath(); ctx.moveTo(meanX, 40); ctx.lineTo(meanX, 270); ctx.stroke();
        ctx.setLineDash([]); ctx.fillStyle = '#ef4444'; ctx.font = 'bold 9px system-ui';
        ctx.fillText('Mean=' + mean.toFixed(1), meanX - 15, 30);
        obs.innerHTML = `<strong>Central Tendencies:</strong><br>
          • <span style="color:#ef4444">Mean</span> = \u03A3(f\u00D7x) / \u03A3f = <strong>${mean.toFixed(2)}</strong><br>
          • <span style="color:#22c55e">Mode Class</span> = <strong>${modeClass}</strong> (frequency = ${maxF})<br>
          • <span style="color:#3b82f6">Median Class</span> = <strong>${medianClass}</strong><br>
          • Total frequency: ${totalF}`;
      }
      btn.addEventListener('click', draw);
      sel.addEventListener('change', draw);
      draw();
    }

    function initHeightsDistancesLab() {
      const canvas = document.getElementById('heightdist-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const distSlider = document.getElementById('hd-dist');
      const angleSlider = document.getElementById('hd-angle');
      const distLabel = document.getElementById('hd-dist-val');
      const angleLabel = document.getElementById('hd-angle-val');
      const obs = document.getElementById('hd-obs');

      function draw() {
        const W = canvas.width, H = canvas.height;
        const d = parseInt(distSlider.value);
        const theta = parseInt(angleSlider.value);
        distLabel.textContent = 'd = ' + d + ' m';
        angleLabel.textContent = '\u03B8 = ' + theta + '°';
        ctx.clearRect(0, 0, W, H);
        const height = d * Math.tan(theta * Math.PI / 180);
        // Ground
        ctx.fillStyle = '#22c55e'; ctx.fillRect(0, H - 40, W, 40);
        // Building
        const bx = 420, bw = 50;
        const maxBH = 220;
        const bh = Math.min(maxBH, height * 2);
        ctx.fillStyle = '#94a3b8'; ctx.fillRect(bx, H - 40 - bh, bw, bh);
        // Windows
        for (let row = 0; row < Math.floor(bh/30); row++) {
          for (let col = 0; col < 2; col++) {
            ctx.fillStyle = '#fbbf24'; ctx.fillRect(bx + 10 + col*20, H - 60 - row*30, 12, 15);
          }
        }
        // Observer
        ctx.fillStyle = '#1e293b'; ctx.font = '24px system-ui'; ctx.fillText('\ud83e\uddcd', 80, H - 42);
        // Line of sight
        ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 2; ctx.setLineDash([6,4]);
        ctx.beginPath(); ctx.moveTo(100, H - 50); ctx.lineTo(bx, H - 40 - bh); ctx.stroke();
        ctx.setLineDash([]);
        // Ground distance
        ctx.strokeStyle = '#3b82f6'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(100, H - 35); ctx.lineTo(bx, H - 35); ctx.stroke();
        ctx.fillStyle = '#3b82f6'; ctx.font = 'bold 10px system-ui';
        ctx.fillText(d + ' m', 250, H - 20);
        // Height label
        ctx.fillStyle = '#ef4444'; ctx.font = 'bold 10px system-ui';
        ctx.fillText('h = ' + height.toFixed(1) + ' m', bx + 55, H - 40 - bh/2);
        // Angle arc
        ctx.strokeStyle = '#f59e0b'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(100, H - 50, 30, -theta*Math.PI/180, 0); ctx.stroke();
        ctx.fillStyle = '#f59e0b'; ctx.font = '10px system-ui'; ctx.fillText(theta + '°', 135, H - 55);
        obs.innerHTML = `<strong>Height Calculation:</strong><br>
          • Distance from base: <strong>${d} m</strong><br>
          • Angle of elevation: <strong>${theta}°</strong><br>
          • h = d \u00D7 tan(\u03B8) = ${d} \u00D7 tan(${theta}°) = ${d} \u00D7 ${Math.tan(theta*Math.PI/180).toFixed(4)}<br>
          • <strong>Height = ${height.toFixed(2)} m</strong>`;
      }
      distSlider.addEventListener('input', draw);
      angleSlider.addEventListener('input', draw);
      draw();
    }


    function initInlineLabs() {
      initMetalReactivityLab();
      
      // 1. Slaking
      const slakingCanvas = document.getElementById('canvas-reaction-slaking');
      if (slakingCanvas) {
        const ctx = slakingCanvas.getContext('2d');
        const btn = document.getElementById('btn-run-reaction-slaking');
        const obs = document.getElementById('obs-reaction-slaking');
        let timerId = null; let frame = 0;
        
        function drawSetup() {
          const W = slakingCanvas.width; const H = slakingCanvas.height;
          ctx.clearRect(0,0,W,H);
          ctx.strokeStyle = 'var(--border-color)'; ctx.lineWidth = 3;
          ctx.beginPath(); ctx.moveTo(W/2 - 60, 100); ctx.lineTo(W/2 - 60, 240);
          ctx.lineTo(W/2 + 60, 240); ctx.lineTo(W/2 + 60, 100); ctx.stroke();
          
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'; ctx.fillRect(W/2 - 140, 150, 50, 80);
          ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 2; ctx.strokeRect(W/2 - 140, 150, 50, 80);
          ctx.strokeRect(W/2 - 125, 135, 20, 15);
          ctx.fillStyle = '#f1f5f9'; ctx.fillRect(W/2 - 138, 175, 46, 53);
          ctx.fillStyle = '#1e293b'; ctx.font = 'bold 12px system-ui'; ctx.fillText("CaO", W/2 - 128, 168);
          
          ctx.fillStyle = 'rgba(59, 130, 246, 0.25)'; ctx.fillRect(W/2 - 58, 150, 116, 88);
          ctx.fillStyle = '#cbd5e1'; ctx.beginPath(); ctx.moveTo(W/2 - 60, 75);
          ctx.quadraticCurveTo(W/2 - 10, 85, W/2 + 20, 75); ctx.lineTo(W/2 + 25, 78);
          ctx.quadraticCurveTo(W/2 - 10, 95, W/2 - 65, 80); ctx.fill();
          ctx.fillStyle = '#94a3b8'; ctx.fillRect(W/2 - 100, 75, 40, 4);
          ctx.fillStyle = '#f8fafc'; ctx.beginPath(); ctx.arc(W/2 - 20, 75, 8, 0, 2*Math.PI);
          ctx.arc(W/2 - 5, 76, 10, 0, 2*Math.PI); ctx.arc(W/2 + 10, 75, 7, 0, 2*Math.PI); ctx.fill();
          
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'; ctx.fillRect(W/2 + 30, 110, 12, 120);
          ctx.beginPath(); ctx.arc(W/2 + 36, 235, 12, 0, 2*Math.PI); ctx.fill();
          ctx.strokeStyle = '#94a3b8'; ctx.strokeRect(W/2 + 30, 110, 12, 120); ctx.stroke();
          ctx.fillStyle = '#ef4444'; ctx.fillRect(W/2 + 33, 230, 6, 5);
          ctx.beginPath(); ctx.arc(W/2 + 36, 235, 9, 0, 2*Math.PI); ctx.fill();
          ctx.font = 'bold 12px system-ui'; ctx.fillText("25°C", W/2 + 48, 230);
        }
        
        btn.addEventListener('click', () => {
          if (timerId) clearInterval(timerId); frame = 0;
          obs.innerHTML = '<strong>Running Reaction...</strong>';
          timerId = setInterval(() => {
            frame++; const W = slakingCanvas.width; const H = slakingCanvas.height;
            ctx.clearRect(0,0,W,H); drawSetup();
            const milkyAlpha = Math.min(0.8, frame * 0.015);
            ctx.fillStyle = `rgba(59, 130, 246, ${0.25 - milkyAlpha/4})`; ctx.fillRect(W/2 - 58, 150, 116, 88);
            if (milkyAlpha > 0) { ctx.fillStyle = `rgba(241, 245, 249, ${milkyAlpha})`; ctx.fillRect(W/2 - 58, 150, 116, 88); }
            
            const dropY1 = Math.min(230, 80 + (frame > 10 ? (frame - 10) * 6 : 0));
            const dropY2 = Math.min(232, 60 + (frame > 10 ? (frame - 10) * 7 : 0));
            const dropY3 = Math.min(228, 70 + (frame > 10 ? (frame - 10) * 5.5 : 0));
            const dissolveScale = Math.max(0, 1 - (frame > 35 ? (frame - 35) * 0.015 : 0));
            if (dissolveScale > 0 && frame >= 10) {
              ctx.globalAlpha = dissolveScale; ctx.fillStyle = '#cbd5e1'; ctx.beginPath();
              ctx.arc(W/2 - 30, dropY1, 10 * dissolveScale, 0, 2*Math.PI);
              ctx.arc(W/2 - 10, dropY2, 12 * dissolveScale, 0, 2*Math.PI);
              ctx.arc(W/2 + 10, dropY3, 9 * dissolveScale, 0, 2*Math.PI); ctx.fill(); ctx.globalAlpha = 1.0;
            }
            const tempVal = Math.min(95, 25 + (frame > 20 ? (frame - 20) * 0.5 : 0));
            const mercuryH = ((tempVal - 25) / 70) * 90;
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'; ctx.fillRect(W/2 + 30, 110, 12, 120);
            ctx.beginPath(); ctx.arc(W/2 + 36, 235, 12, 0, 2*Math.PI); ctx.fill();
            ctx.strokeRect(W/2 + 30, 110, 12, 120); ctx.stroke();
            ctx.fillStyle = '#ef4444'; ctx.fillRect(W/2 + 33, 230 - mercuryH, 6, mercuryH + 5);
            ctx.beginPath(); ctx.arc(W/2 + 36, 235, 9, 0, 2*Math.PI); ctx.fill();
            ctx.font = 'bold 12px system-ui'; ctx.fillText(tempVal.toFixed(0) + "°C", W/2 + 48, 230 - mercuryH + 5);
            
            obs.innerHTML = `<strong>Observations:</strong><br>
              • CaO particles drop into the water and dissolve.<br>
              • Thermometer shoots up to <strong>${tempVal.toFixed(0)}°C</strong> (highly exothermic).<br>
              • Solution turns milky white (Slaked lime Ca(OH)₂).<br>
              <code>CaO(s) + H₂O(l) → Ca(OH)₂(aq) + Heat ↑</code>`;
            if (frame > 180) clearInterval(timerId);
          }, 40);
        });
        drawSetup();
      }

      // 2. Electrolysis
      const elecCanvas = document.getElementById('canvas-reaction-electrolysis');
      if (elecCanvas) {
        const ctx = elecCanvas.getContext('2d');
        const btn = document.getElementById('btn-run-reaction-electrolysis');
        const obs = document.getElementById('obs-reaction-electrolysis');
        let timerId = null; let frame = 0;
        
        function drawSetup(currentFrame = 0) {
          const W = elecCanvas.width; const H = elecCanvas.height; ctx.clearRect(0,0,W,H);
          
          // Circuit diagram (Battery and Wires)
          ctx.fillStyle = '#1e293b'; ctx.fillRect(W/2 - 25, 20, 50, 25);
          ctx.fillStyle = '#e2e8f0'; ctx.fillRect(W/2 - 25, 20, 15, 25);
          ctx.fillStyle = '#ef4444'; ctx.fillRect(W/2 + 10, 20, 15, 25);
          ctx.fillStyle = '#0f172a'; ctx.font = 'bold 12px monospace'; 
          ctx.fillText("-", W/2 - 20, 37);
          ctx.fillText("+", W/2 + 13, 38);
          ctx.fillStyle = '#f8fafc'; ctx.fillText("9V", W/2 - 6, 37);
          
          ctx.lineWidth = 2;
          ctx.strokeStyle = '#0f172a';
          ctx.beginPath(); ctx.moveTo(W/2 - 25, 32); ctx.lineTo(W/2 - 40, 32); ctx.lineTo(W/2 - 40, 245); ctx.lineTo(W/2 - 20, 245); ctx.stroke();
          ctx.strokeStyle = '#ef4444';
          ctx.beginPath(); ctx.moveTo(W/2 + 25, 32); ctx.lineTo(W/2 + 40, 32); ctx.lineTo(W/2 + 40, 245); ctx.lineTo(W/2 + 20, 245); ctx.stroke();
          
          // Beaker
          ctx.strokeStyle = 'var(--border-color)'; ctx.lineWidth = 3; ctx.beginPath();
          ctx.moveTo(W/2 - 60, 120); ctx.lineTo(W/2 - 60, 240); ctx.lineTo(W/2 + 60, 240); ctx.lineTo(W/2 + 60, 120); ctx.stroke();
          
          // Water in Beaker (Drops as it evaporates)
          const maxGasH = 134; 
          const hGasHeight = Math.min(maxGasH, currentFrame * 0.8);
          // Drop water level proportionally to the total gas produced
          const waterDrop = (hGasHeight + (hGasHeight/2)) * 0.15;
          const waterY = 140 + waterDrop;
          
          ctx.fillStyle = 'rgba(56, 189, 248, 0.2)'; 
          ctx.fillRect(W/2 - 58, waterY, 116, 238 - waterY);
          ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)'; ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(W/2 - 58, waterY); ctx.lineTo(W/2 + 58, waterY); ctx.stroke();
          
          // Electrodes (Graphite rods)
          ctx.fillStyle = '#334155'; ctx.fillRect(W/2 - 25, 160, 10, 80); ctx.fillRect(W/2 + 15, 160, 10, 80);
          
          // Test Tubes (Inverted)
          ctx.strokeStyle = '#cbd5e1'; ctx.lineWidth = 2;
          ctx.beginPath(); ctx.moveTo(W/2 - 32, 230); ctx.lineTo(W/2 - 32, 85); ctx.arc(W/2 - 20, 85, 12, Math.PI, 0); ctx.lineTo(W/2 - 8, 230); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(W/2 + 8, 230); ctx.lineTo(W/2 + 8, 85); ctx.arc(W/2 + 20, 85, 12, Math.PI, 0); ctx.lineTo(W/2 + 32, 230); ctx.stroke();
          
          // Labels
          ctx.fillStyle = 'var(--text-muted)'; ctx.font = 'bold 10px system-ui';
          ctx.fillText("Cathode", W/2 - 58, 260); ctx.fillText("Anode", W/2 + 18, 260);
        }
        
        let isRunning = false;
        btn.addEventListener('click', () => {
          if (isRunning) {
            clearInterval(timerId);
            isRunning = false;
            btn.innerText = 'Turn Power On 🔋';
            btn.style.background = 'var(--primary-color)';
            obs.innerHTML = `<strong>Power OFF.</strong><br>Electrolysis paused.`;
          } else {
            isRunning = true;
            if (frame > 110) frame = 0; // restart if finished
            btn.innerText = 'Turn Power Off 🛑';
            btn.style.background = 'var(--danger-color, #ef4444)';
            obs.innerHTML = '<strong>Power ON.</strong><br>Running Electrolysis...';
            timerId = setInterval(() => {
              frame++; const W = elecCanvas.width; const H = elecCanvas.height; ctx.clearRect(0,0,W,H); drawSetup(frame);
              
              const maxGasH = 134; // Fill up the entire test tube
              const hGasHeight = Math.min(maxGasH, frame * 0.8); 
              const oGasHeight = hGasHeight / 2;
              
              // Draw gas pockets (pushing water down)
              ctx.fillStyle = '#ffffff'; 
              ctx.fillRect(W/2 - 31, 86, 22, hGasHeight);
              ctx.fillStyle = '#3b82f6'; ctx.font = 'bold 12px system-ui';
              if (hGasHeight > 10) ctx.fillText("H₂", W/2 - 27, 80 + hGasHeight/2);
              
              ctx.fillStyle = '#ffffff';
              ctx.fillRect(W/2 + 9, 86, 22, oGasHeight);
              ctx.fillStyle = '#ef4444';
              if (oGasHeight > 10) ctx.fillText("O₂", W/2 + 13, 80 + oGasHeight/2);
              
              // Bubbles forming and rising
              ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
              ctx.strokeStyle = 'rgba(255, 255, 255, 1)';
              ctx.lineWidth = 1;
              
              for (let i=0; i<12; i++) {
                const bY = 230 - ((frame * 2 + i * 11) % (144 - hGasHeight));
                if (bY > 86 + hGasHeight) { 
                  ctx.beginPath(); ctx.arc(W/2 - 20 + Math.sin(frame*0.1 + i)*3, bY, 2.5, 0, 2*Math.PI); 
                  ctx.fill(); ctx.stroke(); 
                }
              }
              for (let i=0; i<6; i++) {
                const bY = 230 - ((frame * 1.5 + i * 18) % (144 - oGasHeight));
                if (bY > 86 + oGasHeight) { 
                  ctx.beginPath(); ctx.arc(W/2 + 20 + Math.cos(frame*0.1 + i)*2, bY, 2, 0, 2*Math.PI); 
                  ctx.fill(); ctx.stroke(); 
                }
              }
              
              obs.innerHTML = `<strong>Observations:</strong><br>
                • Gas bubbles vigorously form at both graphite electrodes.<br>
                • The volume of Hydrogen gas (Cathode) is clearly <strong>double</strong> the volume of Oxygen gas (Anode).<br>
                • Notice the overall water level in the beaker dropping as liquid water is decomposed into gases!<br>
                <code>2H₂O(l) + Electricity → 2H₂(g)↑ + O₂(g)↑</code>`;
                
              if(hGasHeight >= maxGasH) {
                clearInterval(timerId);
                isRunning = false;
                btn.innerText = 'Turn Power On 🔋';
                btn.style.background = 'var(--primary-color)';
                obs.innerHTML = `<strong>Reaction Complete.</strong><br>Test tubes are full of gas.`;
              }
            }, 40);
          }
        });
        drawSetup();
      }

      // 3. Lead Nitrate
      const leadCanvas = document.getElementById('canvas-reaction-lead-nitrate');
      if (leadCanvas) {
        const ctx = leadCanvas.getContext('2d');
        const btn = document.getElementById('btn-run-reaction-lead-nitrate');
        const obs = document.getElementById('obs-reaction-lead-nitrate');
        let timerId = null; let frame = 0;
        function drawSetup() {
          const W = leadCanvas.width; const H = leadCanvas.height; ctx.clearRect(0,0,W,H);
          ctx.fillStyle = '#475569'; ctx.fillRect(W/2 + 15, H/2 + 75, 40, 15); ctx.fillRect(W/2 + 30, H/2 + 50, 10, 25);
          ctx.save(); ctx.translate(W/2, H/2); ctx.rotate((-30 * Math.PI) / 180);
          ctx.strokeStyle = 'var(--border-color)'; ctx.beginPath(); ctx.moveTo(-15, -60); ctx.lineTo(-15, 60); ctx.arc(0, 60, 15, Math.PI, 0, true); ctx.lineTo(15, -60); ctx.stroke();
          ctx.fillStyle = '#f8fafc'; ctx.beginPath(); ctx.arc(-5, 55, 6, 0, 2*Math.PI); ctx.arc(4, 57, 7, 0, 2*Math.PI); ctx.fill(); ctx.restore();
        }
        btn.addEventListener('click', () => {
          if(timerId) clearInterval(timerId); frame = 0;
          timerId = setInterval(() => {
            frame++; const W = leadCanvas.width; const H = leadCanvas.height; ctx.clearRect(0,0,W,H); drawSetup();
            ctx.fillStyle = '#f97316'; ctx.beginPath(); ctx.moveTo(W/2 + 22, H/2 + 50); ctx.quadraticCurveTo(W/2 + 35, H/2 + 10, W/2 + 48, H/2 + 50); ctx.fill();
            ctx.fillStyle = '#eab308'; ctx.beginPath(); ctx.moveTo(W/2 + 27, H/2 + 50); ctx.quadraticCurveTo(W/2 + 35, H/2 + 22, W/2 + 43, H/2 + 50); ctx.fill();
            ctx.save(); ctx.translate(W/2, H/2); ctx.rotate((-30 * Math.PI) / 180);
            ctx.fillStyle = frame > 25 ? '#fbbf24' : '#f8fafc'; ctx.beginPath(); ctx.arc(-5, 55, 6, 0, 2*Math.PI); ctx.arc(4, 57, 7, 0, 2*Math.PI); ctx.fill();
            if (frame > 15) {
              ctx.fillStyle = 'rgba(180, 83, 9, 0.45)';
              for (let i = 0; i < 4; i++) {
                const fX = -10 + i * 8 + Math.sin(frame * 0.3 + i) * 3;
                const fY = 30 - (frame - 15) * 3;
                if (fY > -120) { ctx.beginPath(); ctx.arc(fX, fY, 6 + (frame % 3), 0, 2*Math.PI); ctx.fill(); }
              }
              ctx.fillStyle = 'rgba(180, 83, 9, 0.8)'; ctx.font = 'bold 8px system-ui'; ctx.fillText("NO₂ Fumes", -25, -20);
            }
            ctx.restore();
            obs.innerHTML = `<strong>Observations:</strong><br>
              • White powder decomposes into yellow Lead Oxide (PbO).<br>
              • Brown fumes of toxic Nitrogen Dioxide (NO₂) gas escape.<br>
              <code>2Pb(NO₃)₂(s) + Heat → 2PbO(s) + 4NO₂(g)↑ + O₂(g)↑</code>`;
            if(frame>65) clearInterval(timerId);
          }, 40);
        });
        drawSetup();
      }
      
      // 4. Iron Copper
      const feCanvas = document.getElementById('canvas-reaction-iron-copper');
      if (feCanvas) {
        const ctx = feCanvas.getContext('2d');
        const btn = document.getElementById('btn-run-reaction-iron-copper');
        const obs = document.getElementById('obs-reaction-iron-copper');
        let timerId = null; let frame = 0;
        function drawSetup() {
          const W = feCanvas.width; const H = feCanvas.height; ctx.clearRect(0,0,W,H);
          ctx.strokeStyle = 'var(--border-color)'; ctx.lineWidth = 3; ctx.beginPath();
          ctx.moveTo(W/2 - 60, 100); ctx.lineTo(W/2 - 60, 240); ctx.lineTo(W/2 + 60, 240); ctx.lineTo(W/2 + 60, 100); ctx.stroke();
          ctx.fillStyle = 'rgba(59, 130, 246, 0.4)'; ctx.fillRect(W/2 - 58, 150, 116, 88);
          ctx.fillStyle = '#64748b'; ctx.fillRect(W/2 - 5, 80, 10, 150); ctx.fillRect(W/2 - 12, 80, 24, 6);
          ctx.beginPath(); ctx.moveTo(W/2 - 5, 230); ctx.lineTo(W/2, 238); ctx.lineTo(W/2 + 5, 230); ctx.fill();
        }
        btn.addEventListener('click', () => {
          if(timerId) clearInterval(timerId); frame = 0;
          timerId = setInterval(() => {
            frame++; const W = feCanvas.width; const H = feCanvas.height; ctx.clearRect(0,0,W,H);
            ctx.strokeStyle = 'var(--border-color)'; ctx.lineWidth = 3; ctx.beginPath();
            ctx.moveTo(W/2 - 60, 100); ctx.lineTo(W/2 - 60, 240); ctx.lineTo(W/2 + 60, 240); ctx.lineTo(W/2 + 60, 100); ctx.stroke();
            const blueAlpha = Math.max(0.05, 0.4 - frame * 0.005); const greenAlpha = Math.min(0.35, frame * 0.005);
            ctx.fillStyle = `rgba(59, 130, 246, ${blueAlpha})`; ctx.fillRect(W/2 - 58, 150, 116, 88);
            ctx.fillStyle = `rgba(132, 204, 22, ${greenAlpha})`; ctx.fillRect(W/2 - 58, 150, 116, 88);
            ctx.fillStyle = '#64748b'; ctx.fillRect(W/2 - 5, 80, 10, 150); ctx.fillRect(W/2 - 12, 80, 24, 6);
            ctx.beginPath(); ctx.moveTo(W/2 - 5, 230); ctx.lineTo(W/2, 238); ctx.lineTo(W/2 + 5, 230); ctx.fill();
            const cuAlpha = Math.min(0.8, frame * 0.01); ctx.fillStyle = `rgba(180, 83, 9, ${cuAlpha})`; ctx.fillRect(W/2 - 6, 150, 12, 80);
            ctx.beginPath(); ctx.moveTo(W/2 - 6, 230); ctx.lineTo(W/2, 239); ctx.lineTo(W/2 + 6, 230); ctx.fill();
            obs.innerHTML = `<strong>Observations:</strong><br>
              • The blue color of CuSO₄ solution fades to pale green (FeSO₄).<br>
              • A brown coating of Copper deposits on the iron nail.<br>
              <code>Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s)</code>`;
            if(frame>80) clearInterval(timerId);
          }, 40);
        });
        drawSetup();
      }

      // 5. Barium Sodium
      const baso4Canvas = document.getElementById('canvas-reaction-barium-sodium');
      if (baso4Canvas) {
        const ctx = baso4Canvas.getContext('2d');
        const btn = document.getElementById('btn-run-reaction-barium-sodium');
        const obs = document.getElementById('obs-reaction-barium-sodium');
        let timerId = null; let frame = 0;
        
        function drawSetup() {
          const W = baso4Canvas.width; const H = baso4Canvas.height; ctx.clearRect(0,0,W,H);
          ctx.strokeStyle = 'var(--border-color)'; ctx.lineWidth = 3; ctx.beginPath();
          ctx.moveTo(W/2 - 60, 100); ctx.lineTo(W/2 - 60, 240); ctx.lineTo(W/2 + 60, 240); ctx.lineTo(W/2 + 60, 100); ctx.stroke();
          
          ctx.save(); ctx.translate(W/2 - 70, 70); ctx.rotate(Math.PI/4); 
          ctx.strokeStyle = '#cbd5e1'; ctx.lineWidth = 2; ctx.strokeRect(-12, -40, 24, 70);
          ctx.fillStyle = 'rgba(125, 211, 252, 0.2)'; ctx.fillRect(-10, -10, 20, 38);
          ctx.fillStyle = '#334155'; ctx.font = 'bold 10px system-ui'; ctx.fillText("BaCl₂", -12, 10);
          ctx.restore();

          ctx.save(); ctx.translate(W/2 + 70, 70); ctx.rotate(-Math.PI/4); 
          ctx.strokeStyle = '#cbd5e1'; ctx.lineWidth = 2; ctx.strokeRect(-12, -40, 24, 70);
          ctx.fillStyle = 'rgba(125, 211, 252, 0.2)'; ctx.fillRect(-10, -10, 20, 38);
          ctx.fillStyle = '#334155'; ctx.font = 'bold 10px system-ui'; ctx.fillText("Na₂SO₄", -18, 10);
          ctx.restore();
        }
        
        btn.addEventListener('click', () => {
          if(timerId) clearInterval(timerId); frame = 0;
          timerId = setInterval(() => {
            frame++; const W = baso4Canvas.width; const H = baso4Canvas.height; ctx.clearRect(0,0,W,H);
            
            // Draw beaker
            ctx.strokeStyle = 'var(--border-color)'; ctx.lineWidth = 3; ctx.beginPath();
            ctx.moveTo(W/2 - 60, 100); ctx.lineTo(W/2 - 60, 240); ctx.lineTo(W/2 + 60, 240); ctx.lineTo(W/2 + 60, 100); ctx.stroke();
            
            // Pouring streams (curved clear liquid)
            if (frame < 30) { 
              ctx.fillStyle = 'rgba(125, 211, 252, 0.4)'; 
              ctx.beginPath(); ctx.moveTo(W/2 - 45, 90); ctx.quadraticCurveTo(W/2 - 30, 150, W/2 - 35, 230); ctx.lineTo(W/2 - 25, 230); ctx.quadraticCurveTo(W/2 - 15, 150, W/2 - 35, 90); ctx.fill();
              ctx.beginPath(); ctx.moveTo(W/2 + 45, 90); ctx.quadraticCurveTo(W/2 + 30, 150, W/2 + 35, 230); ctx.lineTo(W/2 + 25, 230); ctx.quadraticCurveTo(W/2 + 15, 150, W/2 + 35, 90); ctx.fill();
            }
            
            // Rising liquid level
            const fillH = Math.min(88, frame * 3); 
            ctx.fillStyle = 'rgba(125, 211, 252, 0.2)'; 
            ctx.fillRect(W/2 - 58, 240 - fillH, 116, fillH);
            
            // White precipitate forming (cloudy effect turning into solid blocks at bottom)
            if (frame > 10) {
              const pptAlpha = Math.min(0.9, (frame - 10) * 0.03);
              ctx.fillStyle = `rgba(255, 255, 255, ${pptAlpha})`;
              ctx.beginPath();
              ctx.moveTo(W/2 - 58, 240); ctx.lineTo(W/2 - 58, 240 - fillH * 0.7);
              ctx.quadraticCurveTo(W/2 - 20, 240 - fillH * 0.9 + Math.sin(frame*0.1)*5, W/2, 240 - fillH * 0.75);
              ctx.quadraticCurveTo(W/2 + 30, 240 - fillH * 0.6 + Math.cos(frame*0.1)*5, W/2 + 58, 240 - fillH * 0.8);
              ctx.lineTo(W/2 + 58, 240); ctx.fill();
              
              if (frame > 40) { 
                const pptHeight = Math.min(25, (frame - 40) * 0.8); 
                ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
                ctx.fillRect(W/2 - 58, 240 - pptHeight, 116, pptHeight); 
              }
            }
            
            // Tilted test tubes while pouring
            ctx.save(); ctx.translate(W/2 - 70, 70); ctx.rotate(Math.PI/2.5); 
            ctx.strokeStyle = '#cbd5e1'; ctx.lineWidth = 2; ctx.strokeRect(-12, -40, 24, 70);
            if (frame < 25) { ctx.fillStyle = 'rgba(125, 211, 252, 0.2)'; ctx.fillRect(-10, -40 + frame*1.5, 20, 38 - frame*1.5); }
            ctx.restore();

            ctx.save(); ctx.translate(W/2 + 70, 70); ctx.rotate(-Math.PI/2.5); 
            ctx.strokeStyle = '#cbd5e1'; ctx.lineWidth = 2; ctx.strokeRect(-12, -40, 24, 70);
            if (frame < 25) { ctx.fillStyle = 'rgba(125, 211, 252, 0.2)'; ctx.fillRect(-10, -40 + frame*1.5, 20, 38 - frame*1.5); }
            ctx.restore();

            obs.innerHTML = `<strong>Observations:</strong><br>
              • Two clear aqueous solutions mix.<br>
              • An insoluble white precipitate of Barium Sulphate (BaSO₄) instantly clouds the solution and settles.<br>
              <code>Na₂SO₄(aq) + BaCl₂(aq) → BaSO₄(s)↓ + 2NaCl(aq)</code>`;
            if(frame>80) clearInterval(timerId);
          }, 40);
        });
        drawSetup();
      }

      // 6. Copper Oxidation
      const redoxCanvas = document.getElementById('canvas-reaction-copper-oxidation');
      if (redoxCanvas) {
        const ctx = redoxCanvas.getContext('2d');
        const btn = document.getElementById('btn-run-reaction-copper-oxidation');
        const obs = document.getElementById('obs-reaction-copper-oxidation');
        let timerId = null; let frame = 0;
        let isRunning = false;

        function drawSetup(currentFrame = 0, isHeating = false) {
          const W = redoxCanvas.width; const H = redoxCanvas.height; ctx.clearRect(0,0,W,H);
          
          // Tripod stand
          ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 3; ctx.beginPath();
          ctx.moveTo(W/2 - 40, 240); ctx.lineTo(W/2 - 25, 160); 
          ctx.moveTo(W/2 + 40, 240); ctx.lineTo(W/2 + 25, 160);
          ctx.moveTo(W/2 - 35, 160); ctx.lineTo(W/2 + 35, 160); ctx.stroke();
          
          // Bunsen burner
          ctx.fillStyle = '#475569'; ctx.fillRect(W/2 - 8, 180, 16, 60); 
          ctx.fillRect(W/2 - 25, 230, 50, 10);

          // Flame
          if (isHeating) {
            ctx.fillStyle = 'rgba(59, 130, 246, 0.7)'; ctx.beginPath(); ctx.moveTo(W/2 - 8, 180); ctx.quadraticCurveTo(W/2, 155 - Math.random()*5, W/2 + 8, 180); ctx.fill();
            ctx.fillStyle = 'rgba(250, 204, 21, 0.4)'; ctx.beginPath(); ctx.moveTo(W/2 - 12, 180); ctx.quadraticCurveTo(W/2, 140 - Math.random()*10, W/2 + 12, 180); ctx.fill();
            
            // O2 molecules floating in
            if (currentFrame < 50 && currentFrame % 2 === 0) { 
              ctx.fillStyle = '#ef4444'; ctx.font = 'bold 11px system-ui'; 
              ctx.fillText("O₂", W/2 - 40 + Math.random()*80, 110 + Math.random()*30); 
            }
          }

          // Watch glass (curved glass dish)
          ctx.strokeStyle = 'rgba(150, 200, 255, 0.6)';
          if (document.documentElement.getAttribute('data-theme') === 'light') {
             ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
          }
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(W/2 - 45, 150);
          ctx.quadraticCurveTo(W/2, 175, W/2 + 45, 150);
          ctx.stroke();

          // Copper Piece -> Powder animation
          // At frame 0, it's a solid block. At max frame (80), it's completely black powder.
          const progress = Math.min(1.0, currentFrame / 80);
          
          // Solid copper block shrinking
          const blockW = 26 * (1 - progress * 0.95); 
          const blockH = 10 * (1 - progress * 0.95);
          if (blockW > 1) {
            ctx.fillStyle = '#b45309'; // Copper color
            ctx.fillRect(W/2 - blockW/2, 161 - blockH, blockW, blockH);
            ctx.fillStyle = '#d97706'; // Highlight
            ctx.fillRect(W/2 - blockW/2, 161 - blockH, blockW, Math.max(1, blockH * 0.2));
          }

          // Black copper oxide powder expanding
          if (progress > 0) {
            const numParticles = Math.floor(progress * 250);
            ctx.fillStyle = '#0f172a'; // Black powder
            for(let i=0; i<numParticles; i++) {
              const angle = (i * 13.7) % (2 * Math.PI);
              const r = (i * 27.1) % (15 + progress * 20); // Spread out as it forms
              const px = W/2 + r * Math.cos(angle);
              // Constrain powder to sit nicely in the watch glass curve
              const curveDepth = Math.pow(r/45, 2) * 12; 
              const py = 161 - curveDepth - (i%4);
              ctx.beginPath();
              ctx.arc(px, py, 1.2, 0, 2*Math.PI);
              ctx.fill();
            }
          }
        }

        btn.addEventListener('click', () => {
          if (timerId) clearInterval(timerId); 
          
          if (isRunning) {
            isRunning = false;
            btn.innerText = 'Trigger Reaction ⚡';
            btn.style.background = 'var(--primary-color)';
            drawSetup(frame, false);
          } else {
            isRunning = true;
            if (frame >= 80) frame = 0; // reset if already completed
            btn.innerText = 'Stop Reaction 🛑';
            btn.style.background = 'var(--danger-color, #ef4444)';
            
            obs.innerHTML = '<strong>Heating...</strong>';
            
            timerId = setInterval(() => {
              frame++; 
              drawSetup(frame, true);
              
              if (frame > 10) {
                obs.innerHTML = `<strong>Observations:</strong><br>
                  • The solid piece of shiny brown copper oxidizes into a black powder.<br>
                  • This powder is Copper(II) Oxide (CuO).<br>
                  • This is an oxidation reaction because Oxygen is added to Copper.<br>
                  <code>2Cu(s) + O₂(g) + Heat → 2CuO(s)</code>`;
              }
                
              if (frame >= 80) {
                clearInterval(timerId);
                isRunning = false;
                btn.innerText = 'Reaction Complete 🔄';
                btn.style.background = 'var(--primary-color)';
                drawSetup(frame, false); // Turn off flame
              }
            }, 60);
          }
        });
        
        drawSetup(0, false);
      }
    }
}
