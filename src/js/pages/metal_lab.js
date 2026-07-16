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
            const targetY = dipped ? 130 : 20;
            animStripY += (targetY - animStripY) * 0.12; // Smooth interpolation
            const stripY = animStripY;

            ctx.fillStyle = getMetalColor(currentMetal);
            ctx.fillRect(t.x - 8, stripY, 16, 75);
            ctx.strokeStyle = '#334155';
            ctx.lineWidth = 1;
            ctx.strokeRect(t.x - 8, stripY, 16, 75);

            ctx.fillStyle = 'black';
            ctx.font = 'bold 9px system-ui';
            ctx.fillText(currentMetal.toUpperCase(), t.x - 6, stripY + 25);

            if (dipped && reactionOccurs && stripY > 120) {
              // Deposit
              ctx.fillStyle = getDepositColor(saltMetalKey);
              ctx.fillRect(t.x - 8, 150, 16, 55);

              // Animated Bubbles
              ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
              for (let i = 0; i < 8; i++) {
                ctx.beginPath();
                const bX = t.x - 8 + (i * 2) + Math.sin(timeTick * 2 + i) * 2;
                const bY = 205 - ((timeTick * 30 + i * 15) % 60);
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

