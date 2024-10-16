const teamData = {
  "teams": [
    {
      "id": "team_01",
      "region": "East",
      "seed": 1,
      "team_name": "UConn",
      "logo_url": "logos/uconn.svg"
    },
    {
      "id": "team_02",
      "region": "East",
      "seed": 16,
      "team_name": "Stetson",
      "logo_url": "logos/stetson.svg"
    },
    {
      "id": "team_03",
      "region": "East",
      "seed": 8,
      "team_name": "FAU",
      "logo_url": "logos/fla-atlantic.svg"
    },
    {
      "id": "team_04",
      "region": "East",
      "seed": 9,
      "team_name": "Northwestern",
      "logo_url": "logos/northwestern.svg"
    },
    {
      "id": "team_17",
      "region": "West",
      "seed": 1,
      "team_name": "North Carolina",
      "logo_url": "logos/north-carolina.svg"
    },
    {
      "id": "team_18",
      "region": "West",
      "seed": 16,
      "team_name": "Wagner",
      "logo_url": "logos/wagner.svg"
    },
    {
      "id": "team_19",
      "region": "West",
      "seed": 8,
      "team_name": "Mississippi St.",
      "logo_url": "logos/mississippi-st.svg"
    },
    {
      "id": "team_20",
      "region": "West",
      "seed": 9,
      "team_name": "Michigan St.",
      "logo_url": "logos/michigan-st.svg"
    }
  ]
};

function drawBracketLine(game1, game2, variant) {
  const bracketContainer = document.querySelector('.bracket_container');
  
  const rect1 = game1.getBoundingClientRect();
  const rect2 = game2.getBoundingClientRect();
  const containerRect = bracketContainer.getBoundingClientRect();
  
  let startX, startY, endX, endY;

  switch (variant) {
    case 'right-down':
      startX = ((rect1.right - containerRect.left) / containerRect.width) * 100;
      startY = ((rect1.top + rect1.height / 2 - containerRect.top) / containerRect.height) * 100;
      endX = ((rect2.left + rect2.width / 2 - containerRect.left) / containerRect.width) * 100;
      endY = ((rect2.top - containerRect.top) / containerRect.height) * 100;
	  drawSVGLine(`${startX}%`, `${startY}%`, `${endX}%`, `${startY}%`, '#ccc', 'round', 'square', '1');
      drawSVGLine(`${endX}%`, `${startY}%`, `${endX}%`, `${endY}%`, '#ccc', 'round', 'square', '1');
      break;
      
    case 'left-down':
      startX = ((rect1.left - containerRect.left) / containerRect.width) * 100;
      startY = ((rect1.top + rect1.height / 2 - containerRect.top) / containerRect.height) * 100;
      endX = ((rect2.left + rect2.width / 2 - containerRect.left) / containerRect.width) * 100;
      endY = ((rect2.top - containerRect.top) / containerRect.height) * 100;
	  drawSVGLine(`${startX}%`, `${startY}%`, `${endX}%`, `${startY}%`, '#ccc', 'round', 'square', '1');
      drawSVGLine(`${endX}%`, `${startY}%`, `${endX}%`, `${endY}%`, '#ccc', 'round', 'square', '1');
      break;

    case 'right-up':
      startX = ((rect1.right - containerRect.left) / containerRect.width) * 100;
      startY = ((rect1.top + rect1.height / 2 - containerRect.top) / containerRect.height) * 100;
      endX = ((rect2.left + rect2.width / 2 - containerRect.left) / containerRect.width) * 100;
      endY = ((rect2.bottom - containerRect.top) / containerRect.height) * 100;
	  drawSVGLine(`${startX}%`, `${startY}%`, `${endX}%`, `${startY}%`, '#ccc', 'round', 'square', '1');
      drawSVGLine(`${endX}%`, `${startY}%`, `${endX}%`, `${endY}%`, '#ccc', 'round', 'square', '1');
      break;

    case 'left-up':
      startX = ((rect1.left - containerRect.left) / containerRect.width) * 100;
      startY = ((rect1.top + rect1.height / 2 - containerRect.top) / containerRect.height) * 100;
      endX = ((rect2.left + rect2.width / 2 - containerRect.left) / containerRect.width) * 100;
      endY = ((rect2.bottom - containerRect.top) / containerRect.height) * 100;
	  drawSVGLine(`${startX}%`, `${startY}%`, `${endX}%`, `${startY}%`, '#ccc', 'round', 'square', '1');
      drawSVGLine(`${endX}%`, `${startY}%`, `${endX}%`, `${endY}%`, '#ccc', 'round', 'square', '1');
      break;

    case 'right':
      startX = ((rect1.right - containerRect.left) / containerRect.width) * 100;
      startY = ((rect1.top + rect1.height / 2 - containerRect.top) / containerRect.height) * 100;
      midX = ((rect1.right + rect2.left) / 2 - containerRect.left) / containerRect.width * 100;
      midY = ((rect2.top + rect2.height / 4 - containerRect.top) / containerRect.height) * 100;
      endX = ((rect2.left - containerRect.left) / containerRect.width) * 100;
      drawSVGLine(`${startX}%`, `${startY}%`, `${midX}%`, `${startY}%`, '#ccc', 'round', 'square', '1');
      drawSVGLine(`${midX}%`, `${startY}%`, `${midX}%`, `${midY}%`, '#ccc', 'round', 'square', '1');
      drawSVGLine(`${midX}%`, `${midY}%`, `${endX}%`, `${midY}%`, '#ccc', 'round', 'square', '1');
      break;

    case 'left':
      startX = ((rect1.left - containerRect.left) / containerRect.width) * 100;
      startY = ((rect1.top + rect1.height / 2 - containerRect.top) / containerRect.height) * 100;
      midX = ((rect1.left + rect2.right) / 2 - containerRect.left) / containerRect.width * 100;
      midY = ((rect2.top + (3 * rect2.height) / 4 - containerRect.top) / containerRect.height) * 100;
      endX = ((rect2.right - containerRect.left) / containerRect.width) * 100;
      drawSVGLine(`${startX}%`, `${startY}%`, `${midX}%`, `${startY}%`, '#ccc', 'round', 'square', '1');
      drawSVGLine(`${midX}%`, `${startY}%`, `${midX}%`, `${midY}%`, '#ccc', 'round', 'square', '1');
      drawSVGLine(`${midX}%`, `${midY}%`, `${endX}%`, `${midY}%`, '#ccc', 'round', 'square', '1');
      break;
    
    default:
      console.error('Invalid variant specified');
      return;
  }
}

function drawSVGLine(x1, y1, x2, y2, color, lineJoin, lineCap, strokeWidth) {
  const svg = document.querySelector('.bracket_lines');
  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  
  line.setAttribute('x1', x1);
  line.setAttribute('y1', y1);
  line.setAttribute('x2', x2);
  line.setAttribute('y2', y2);
  line.setAttribute('stroke', color);
  line.setAttribute('stroke-width', strokeWidth);
  line.setAttribute('stroke-linejoin', lineJoin);
  line.setAttribute('stroke-linecap', lineCap);
  
  svg.appendChild(line);
}

function drawAllBracketLines() {
  const game = {};

  for (let i = 1; i <= 67; i++) {
    const gameId = i.toString().padStart(2, '0');
    game[`${gameId}`] = document.querySelector(`#game_container_${gameId}`);
  }
  
  drawBracketLine(game['01'], game['33'], 'right-down');
  drawBracketLine(game['02'], game['33'], 'right-up');
  drawBracketLine(game['03'], game['34'], 'right-down');
  drawBracketLine(game['04'], game['34'], 'right-up');
  drawBracketLine(game['05'], game['35'], 'right-down');
  drawBracketLine(game['06'], game['35'], 'right-up');
  drawBracketLine(game['07'], game['36'], 'right-down');
  drawBracketLine(game['08'], game['36'], 'right-up');
  drawBracketLine(game['09'], game['37'], 'right-down');
  drawBracketLine(game['10'], game['37'], 'right-up');
  drawBracketLine(game['11'], game['38'], 'right-down');
  drawBracketLine(game['12'], game['38'], 'right-up');
  drawBracketLine(game['13'], game['39'], 'right-down');
  drawBracketLine(game['14'], game['39'], 'right-up');
  drawBracketLine(game['15'], game['40'], 'right-down');
  drawBracketLine(game['16'], game['40'], 'right-up');

  drawBracketLine(game['33'], game['49'], 'right-down');
  drawBracketLine(game['34'], game['49'], 'right-up');
  drawBracketLine(game['35'], game['50'], 'right-down');
  drawBracketLine(game['36'], game['50'], 'right-up');
  drawBracketLine(game['37'], game['51'], 'right-down');
  drawBracketLine(game['38'], game['51'], 'right-up');
  drawBracketLine(game['39'], game['52'], 'right-down');
  drawBracketLine(game['40'], game['52'], 'right-up');

  drawBracketLine(game['49'], game['57'], 'right-down');
  drawBracketLine(game['50'], game['57'], 'right-up');
  drawBracketLine(game['51'], game['58'], 'right-down');
  drawBracketLine(game['52'], game['58'], 'right-up');

  drawBracketLine(game['57'], game['61'], 'right-down');
  drawBracketLine(game['58'], game['61'], 'right-up');
  
  drawBracketLine(game['17'], game['41'], 'right-down');
  drawBracketLine(game['18'], game['41'], 'right-up');
  drawBracketLine(game['19'], game['42'], 'right-down');
  drawBracketLine(game['20'], game['42'], 'right-up');
  drawBracketLine(game['21'], game['43'], 'right-down');
  drawBracketLine(game['22'], game['43'], 'right-up');
  drawBracketLine(game['23'], game['44'], 'right-down');
  drawBracketLine(game['24'], game['44'], 'right-up');
  drawBracketLine(game['25'], game['45'], 'right-down');
  drawBracketLine(game['26'], game['45'], 'right-up');
  drawBracketLine(game['27'], game['46'], 'right-down');
  drawBracketLine(game['28'], game['46'], 'right-up');
  drawBracketLine(game['29'], game['47'], 'right-down');
  drawBracketLine(game['30'], game['47'], 'right-up');
  drawBracketLine(game['31'], game['48'], 'right-down');
  drawBracketLine(game['32'], game['48'], 'right-up');

  drawBracketLine(game['41'], game['53'], 'right-down');
  drawBracketLine(game['42'], game['53'], 'right-up');
  drawBracketLine(game['43'], game['54'], 'right-down');
  drawBracketLine(game['44'], game['54'], 'right-up');
  drawBracketLine(game['45'], game['55'], 'right-down');
  drawBracketLine(game['46'], game['55'], 'right-up');
  drawBracketLine(game['47'], game['56'], 'right-down');
  drawBracketLine(game['48'], game['56'], 'right-up');

  drawBracketLine(game['53'], game['59'], 'right-down');
  drawBracketLine(game['54'], game['59'], 'right-up');
  drawBracketLine(game['55'], game['60'], 'right-down');
  drawBracketLine(game['56'], game['60'], 'right-up');

  drawBracketLine(game['59'], game['62'], 'right-down');
  drawBracketLine(game['60'], game['62'], 'right-up');
  
  drawBracketLine(game['61'], game['63'], 'right');
  drawBracketLine(game['62'], game['63'], 'left');
  
  /*drawBracketLine(game['64'], game[''], 'up');
  drawBracketLine(game['65'], game[''], 'up');
  drawBracketLine(game['66'], game[''], 'up');
  drawBracketLine(game['67'], game[''], 'up');*/
}

function initializeRound1TeamInfo(data) {
  const teams = data.teams;
  
  const idMapping = {
    "team_01": "game_01_top",
    "team_02": "game_01_bot",
    "team_03": "game_02_top",
    "team_04": "game_02_bot",
    "team_05": "game_03_top",
    "team_06": "game_03_bot",
    "team_07": "game_04_top",
    "team_08": "game_04_bot",
    "team_09": "game_05_top",
    "team_10": "game_05_bot",
    "team_11": "game_06_top",
    "team_12": "game_06_bot",
    "team_13": "game_07_top",
    "team_14": "game_07_bot",
    "team_15": "game_08_top",
    "team_16": "game_08_bot",
    "team_17": "game_09_top",
    "team_18": "game_09_bot",
    "team_19": "game_10_top",
    "team_20": "game_10_bot",
    "team_21": "game_11_top",
    "team_22": "game_11_bot",
    "team_23": "game_12_top",
    "team_24": "game_12_bot",
    "team_25": "game_13_top",
    "team_26": "game_13_bot",
    "team_27": "game_14_top",
    "team_28": "game_14_bot",
    "team_29": "game_15_top",
    "team_30": "game_15_bot",
    "team_31": "game_16_top",
    "team_32": "game_16_bot",
    "team_33": "game_17_top",
    "team_34": "game_17_bot",
    "team_35": "game_18_top",
    "team_36": "game_18_bot",
    "team_37": "game_19_top",
    "team_38": "game_19_bot",
    "team_39": "game_20_top",
    "team_40": "game_20_bot",
    "team_41": "game_21_top",
    "team_42": "game_21_bot",
    "team_43": "game_22_top",
    "team_44": "game_22_bot",
    "team_45": "game_23_top",
    "team_46": "game_23_bot",
    "team_47": "game_24_top",
    "team_48": "game_24_bot",
    "team_49": "game_25_top",
    "team_50": "game_25_bot",
    "team_51": "game_26_top",
    "team_52": "game_26_bot",
    "team_53": "game_27_top",
    "team_54": "game_27_bot",
    "team_55": "game_28_top",
    "team_56": "game_28_bot",
    "team_57": "game_29_top",
    "team_58": "game_29_bot",
    "team_59": "game_30_top",
    "team_60": "game_30_bot",
    "team_61": "game_31_top",
    "team_62": "game_31_bot",
    "team_63": "game_32_top",
    "team_64": "game_32_bot"
  };

  teams.forEach(team => {
    const mappedId = idMapping[team.id];
    const teamContainer = document.getElementById(mappedId);
    if (teamContainer) {
      const logoContainer = teamContainer.querySelector('.logo_container');
      const seedContainer = teamContainer.querySelector('.seed');
      const teamNameContainer = teamContainer.querySelector('.team_name');
      const emojiContainer = teamContainer.querySelector('.emoji');

      if (logoContainer) {
        logoContainer.style.backgroundImage = `url('./${team.logo_url}')`;
        logoContainer.style.backgroundSize = 'contain';
        logoContainer.style.backgroundRepeat = 'no-repeat';
      }
      if (seedContainer) {
        seedContainer.textContent = team.seed;
      }
      if (teamNameContainer) {
        teamNameContainer.textContent = team.team_name;
      }
      if (emojiContainer) {
        emojiContainer.textContent = '';
      }
    }
  });
}

window.onload = function() {
  initializeRound1TeamInfo(teamData);
  drawAllBracketLines();
};
