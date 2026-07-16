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
        }
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
          }
        }, 40);)`;
            ctx.beginPath();
            ctx.ellipse(W/2, 147, 20, 5, 0, 0, 2*Math.PI);
            ctx.fill();
            
            if (frame < 50 && frame % 2 === 0) {
               ctx.fillStyle = '#ef4444';
               ctx.font = '10px system-ui';
               ctx.fillText("O₂", W/2 - 30 + Math.random()*60, 120 + Math.random()*20);
            }

            obsPanel.innerHTML = `<strong>Observations:</strong><br>
              • The surface of the shiny brown copper powder becomes coated with black Copper(II) Oxide.<br>
              • This is an oxidation reaction because Oxygen is added to Copper.<br>
              <code>2Cu(s) + O₂(g) + Heat → 2CuO(s)</code>`;

            if (frame > 80) {
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

