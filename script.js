
/* JS for the March Madness Bracket Visualizer */

const settings = {
  "population": 1,
  "right_flip": 0,
  "first_four": 1,
  "final_four_flare": 0,
  "finals_flare": 0,
  "grayscale_on_loss": 0,
  "strikethrough_on_loss": 0
};

const teamData = [
  {
    "id": 1,
    "seed": 1,
    "team_name": "UConn",
    "logo": "uconn.svg"
  },
  {
    "id": 2,
    "seed": 16,
    "team_name": "Stetson",
    "logo": "stetson.svg"
  },
  {
    "id": 3,
    "seed": 8,
    "team_name": "FAU",
    "logo": "fla-atlantic.svg"
  },
  {
    "id": 4,
    "seed": 9,
    "team_name": "Northwestern",
    "logo": "northwestern.svg"
  },
  {
    "id": 5,
    "seed": 5,
    "team_name": "San Diego St.",
    "logo": "san-diego-st.svg"
  },
  {
    "id": 6,
    "seed": 12,
    "team_name": "UAB",
    "logo": "uab.svg"
  },
  {
    "id": 7,
    "seed": 4,
    "team_name": "Auburn",
    "logo": "auburn.svg"
  },
  {
    "id": 8,
    "seed": 13,
    "team_name": "Yale",
    "logo": "yale.svg"
  },
  {
    "id": 9,
    "seed": 6,
    "team_name": "BYU",
    "logo": "byu.svg"
  },
  {
    "id": 10,
    "seed": 11,
    "team_name": "Duquesne",
    "logo": "duquesne.svg"
  },
  {
    "id": 11,
    "seed": 3,
    "team_name": "Illinois",
    "logo": "illinois.svg"
  },
  {
    "id": 12,
    "seed": 14,
    "team_name": "Morehead St.",
    "logo": "morehead-st.svg"
  },
  {
    "id": 13,
    "seed": 7,
    "team_name": "Washington St.",
    "logo": "washington-st.svg"
  },
  {
    "id": 14,
    "seed": 10,
    "team_name": "Drake",
    "logo": "drake.svg"
  },
  {
    "id": 15,
    "seed": 2,
    "team_name": "Iowa St.",
    "logo": "iowa-st.svg"
  },
  {
    "id": 16,
    "seed": 15,
    "team_name": "S. Dakota St.",
    "logo": "south-dakota-st.svg"
  },
  {
    "id": 17,
    "seed": 1,
    "team_name": "North Carolina",
    "logo": "north-carolina.svg"
  },
  {
    "id": 18,
    "seed": 16,
    "team_name": "Wagner",
    "logo": "wagner.svg"
  },
  {
    "id": 19,
    "seed": 8,
    "team_name": "Mississippi St.",
    "logo": "mississippi-st.svg"
  },
  {
    "id": 20,
    "seed": 9,
    "team_name": "Michigan St.",
    "logo": "michigan-st.svg"
  },
  {
    "id": 21,
    "seed": 5,
    "team_name": "Saint Mary's",
    "logo": "st-marys-ca.svg"
  },
  {
    "id": 22,
    "seed": 12,
    "team_name": "Grand Canyon",
    "logo": "grand-canyon.svg"
  },
  {
    "id": 23,
    "seed": 4,
    "team_name": "Alabama",
    "logo": "alabama.svg"
  },
  {
    "id": 24,
    "seed": 13,
    "team_name": "Charleston",
    "logo": "col-of-charleston.svg"
  },
  {
    "id": 25,
    "seed": 6,
    "team_name": "Clemson",
    "logo": "clemson.svg"
  },
  {
    "id": 26,
    "seed": 11,
    "team_name": "New Mexico",
    "logo": "new-mexico.svg"
  },
  {
    "id": 27,
    "seed": 3,
    "team_name": "Baylor",
    "logo": "baylor.svg"
  },
  {
    "id": 28,
    "seed": 14,
    "team_name": "Colgate",
    "logo": "colgate.svg"
  },
  {
    "id": 29,
    "seed": 7,
    "team_name": "Dayton",
    "logo": "dayton.svg"
  },
  {
    "id": 30,
    "seed": 10,
    "team_name": "Nevada",
    "logo": "nevada.svg"
  },
  {
    "id": 31,
    "seed": 2,
    "team_name": "Arizona",
    "logo": "arizona.svg"
  },
  {
    "id": 32,
    "seed": 15,
    "team_name": "Long Beach St.",
    "logo": "long-beach-st.svg"
  },
  {
    "id": 33,
    "seed": 1,
    "team_name": "Houston",
    "logo": "houston.svg"
  },
  {
    "id": 34,
    "seed": 16,
    "team_name": "Longwood",
    "logo": "longwood.svg"
  },
  {
    "id": 35,
    "seed": 8,
    "team_name": "Nebraska",
    "logo": "nebraska.svg"
  },
  {
    "id": 36,
    "seed": 9,
    "team_name": "Texas A&M",
    "logo": "texas-am.svg"
  },
  {
    "id": 37,
    "seed": 5,
    "team_name": "Wisconsin",
    "logo": "wisconsin.svg"
  },
  {
    "id": 38,
    "seed": 12,
    "team_name": "James Madison",
    "logo": "james-madison.svg"
  },
  {
    "id": 39,
    "seed": 4,
    "team_name": "Duke",
    "logo": "duke.svg"
  },
  {
    "id": 40,
    "seed": 13,
    "team_name": "Vermont",
    "logo": "vermont.svg"
  },
  {
    "id": 41,
    "seed": 6,
    "team_name": "Texas Tech",
    "logo": "texas-tech.svg"
  },
  {
    "id": 42,
    "seed": 11,
    "team_name": "NC State",
    "logo": "north-carolina-st.svg"
  },
  {
    "id": 43,
    "seed": 3,
    "team_name": "Kentucky",
    "logo": "kentucky.svg"
  },
  {
    "id": 44,
    "seed": 14,
    "team_name": "Oakland",
    "logo": "oakland.svg"
  },
  {
    "id": 45,
    "seed": 7,
    "team_name": "Florida",
    "logo": "florida.svg"
  },
  {
    "id": 46,
    "seed": 10,
    "team_name": "Colorado",
    "logo": "colorado.svg"
  },
  {
    "id": 47,
    "seed": 2,
    "team_name": "Marquette",
    "logo": "marquette.svg"
  },
  {
    "id": 48,
    "seed": 15,
    "team_name": "Western Ky.",
    "logo": "western-ky.svg"
  },
  {
    "id": 49,
    "seed": 1,
    "team_name": "Purdue",
    "logo": "purdue.svg"
  },
  {
    "id": 50,
    "seed": 16,
    "team_name": "Grambling St.",
    "logo": "grambling.svg"
  },
  {
    "id": 51,
    "seed": 8,
    "team_name": "Utah St.",
    "logo": "utah-st.svg"
  },
  {
    "id": 52,
    "seed": 9,
    "team_name": "TCU",
    "logo": "tcu.svg"
  },
  {
    "id": 53,
    "seed": 5,
    "team_name": "Gonzaga",
    "logo": "gonzaga.svg"
  },
  {
    "id": 54,
    "seed": 12,
    "team_name": "McNeese",
    "logo": "mcneese.svg"
  },
  {
    "id": 55,
    "seed": 4,
    "team_name": "Kansas",
    "logo": "kansas.svg"
  },
  {
    "id": 56,
    "seed": 13,
    "team_name": "Samford",
    "logo": "samford.svg"
  },
  {
    "id": 57,
    "seed": 6,
    "team_name": "S. Carolina",
    "logo": "south-carolina.svg"
  },
  {
    "id": 58,
    "seed": 11,
    "team_name": "Oregon",
    "logo": "oregon.svg"
  },
  {
    "id": 59,
    "seed": 3,
    "team_name": "Creighton",
    "logo": "creighton.svg"
  },
  {
    "id": 60,
    "seed": 14,
    "team_name": "Akron",
    "logo": "akron.svg"
  },
  {
    "id": 61,
    "seed": 7,
    "team_name": "Texas",
    "logo": "texas.svg"
  },
  {
    "id": 62,
    "seed": 10,
    "team_name": "Colorado St.",
    "logo": "colorado-st.svg"
  },
  {
    "id": 63,
    "seed": 2,
    "team_name": "Tennessee",
    "logo": "tennessee.svg"
  },
  {
    "id": 64,
    "seed": 15,
    "team_name": "Saint Peter's",
    "logo": "st-peters.svg"
  }
];

const bracketData = [
  {
	"game_id": 1,
    "team_id": 1,
	"team_id": xxx,
	"seed":1,
    "score": 80
  },
  {
	"game_id": 1,
    "team_id": 2,
	"team_id": yyy,
	"seed":16,
    "score": 80
  },
  {
	"game_id": 2,
    "team_id": 3,
	"team_id": zzz,
	"seed":8,
    "score": 80
  }
];

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
	  drawSVGLine(`${startX}%`, `${startY}%`, `${endX}%`, `${startY}%`, '#ccc', 'square', 'square', '1');
      drawSVGLine(`${endX}%`, `${startY}%`, `${endX}%`, `${endY}%`, '#ccc', 'square', 'square', '1');
      break;
      
    case 'left-down':
      startX = ((rect1.left - containerRect.left) / containerRect.width) * 100;
      startY = ((rect1.top + rect1.height / 2 - containerRect.top) / containerRect.height) * 100;
      endX = ((rect2.left + rect2.width / 2 - containerRect.left) / containerRect.width) * 100;
      endY = ((rect2.top - containerRect.top) / containerRect.height) * 100;
	  drawSVGLine(`${startX}%`, `${startY}%`, `${endX}%`, `${startY}%`, '#ccc', 'square', 'square', '1');
      drawSVGLine(`${endX}%`, `${startY}%`, `${endX}%`, `${endY}%`, '#ccc', 'square', 'square', '1');
      break;

    case 'right-up':
      startX = ((rect1.right - containerRect.left) / containerRect.width) * 100;
      startY = ((rect1.top + rect1.height / 2 - containerRect.top) / containerRect.height) * 100;
      endX = ((rect2.left + rect2.width / 2 - containerRect.left) / containerRect.width) * 100;
      endY = ((rect2.bottom - containerRect.top) / containerRect.height) * 100;
	  drawSVGLine(`${startX}%`, `${startY}%`, `${endX}%`, `${startY}%`, '#ccc', 'square', 'square', '1');
      drawSVGLine(`${endX}%`, `${startY}%`, `${endX}%`, `${endY}%`, '#ccc', 'square', 'square', '1');
      break;

    case 'left-up':
      startX = ((rect1.left - containerRect.left) / containerRect.width) * 100;
      startY = ((rect1.top + rect1.height / 2 - containerRect.top) / containerRect.height) * 100;
      endX = ((rect2.left + rect2.width / 2 - containerRect.left) / containerRect.width) * 100;
      endY = ((rect2.bottom - containerRect.top) / containerRect.height) * 100;
	  drawSVGLine(`${startX}%`, `${startY}%`, `${endX}%`, `${startY}%`, '#ccc', 'square', 'square', '1');
      drawSVGLine(`${endX}%`, `${startY}%`, `${endX}%`, `${endY}%`, '#ccc', 'square', 'square', '1');
	  break;

    case 'right':
      startX = ((rect1.right - containerRect.left) / containerRect.width) * 100;
      startY = ((rect1.top + rect1.height / 2 - containerRect.top) / containerRect.height) * 100;
      midX = ((rect1.right + rect2.left) / 2 - containerRect.left) / containerRect.width * 100;
      midY = ((rect2.top + rect2.height / 4 - containerRect.top) / containerRect.height) * 100;
      endX = ((rect2.left - containerRect.left) / containerRect.width) * 100;
      drawSVGLine(`${startX}%`, `${startY}%`, `${midX}%`, `${startY}%`, '#ccc', 'square', 'square', '1');
      drawSVGLine(`${midX}%`, `${startY}%`, `${midX}%`, `${midY}%`, '#ccc', 'square', 'square', '1');
      drawSVGLine(`${midX}%`, `${midY}%`, `${endX}%`, `${midY}%`, '#ccc', 'square', 'square', '1');
	  break;

    case 'left':
      startX = ((rect1.left - containerRect.left) / containerRect.width) * 100;
      startY = ((rect1.top + rect1.height / 2 - containerRect.top) / containerRect.height) * 100;
      midX = ((rect1.left + rect2.right) / 2 - containerRect.left) / containerRect.width * 100;
      midY = ((rect2.top + (3 * rect2.height) / 4 - containerRect.top) / containerRect.height) * 100;
      endX = ((rect2.right - containerRect.left) / containerRect.width) * 100;
      drawSVGLine(`${startX}%`, `${startY}%`, `${midX}%`, `${startY}%`, '#ccc', 'square', 'square', '1');
      drawSVGLine(`${midX}%`, `${startY}%`, `${midX}%`, `${midY}%`, '#ccc', 'square', 'square', '1');
      drawSVGLine(`${midX}%`, `${midY}%`, `${endX}%`, `${midY}%`, '#ccc', 'square', 'square', '1');
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
  
  drawBracketLine(game['17'], game['41'], 'left-down');
  drawBracketLine(game['18'], game['41'], 'left-up');
  drawBracketLine(game['19'], game['42'], 'left-down');
  drawBracketLine(game['20'], game['42'], 'left-up');
  drawBracketLine(game['21'], game['43'], 'left-down');
  drawBracketLine(game['22'], game['43'], 'left-up');
  drawBracketLine(game['23'], game['44'], 'left-down');
  drawBracketLine(game['24'], game['44'], 'left-up');
  drawBracketLine(game['25'], game['45'], 'left-down');
  drawBracketLine(game['26'], game['45'], 'left-up');
  drawBracketLine(game['27'], game['46'], 'left-down');
  drawBracketLine(game['28'], game['46'], 'left-up');
  drawBracketLine(game['29'], game['47'], 'left-down');
  drawBracketLine(game['30'], game['47'], 'left-up');
  drawBracketLine(game['31'], game['48'], 'left-down');
  drawBracketLine(game['32'], game['48'], 'left-up');
  
  drawBracketLine(game['41'], game['53'], 'left-down');
  drawBracketLine(game['42'], game['53'], 'left-up');
  drawBracketLine(game['43'], game['54'], 'left-down');
  drawBracketLine(game['44'], game['54'], 'left-up');
  drawBracketLine(game['45'], game['55'], 'left-down');
  drawBracketLine(game['46'], game['55'], 'left-up');
  drawBracketLine(game['47'], game['56'], 'left-down');
  drawBracketLine(game['48'], game['56'], 'left-up');
  
  drawBracketLine(game['53'], game['59'], 'left-down');
  drawBracketLine(game['54'], game['59'], 'left-up');
  drawBracketLine(game['55'], game['60'], 'left-down');
  drawBracketLine(game['56'], game['60'], 'left-up');
  
  drawBracketLine(game['59'], game['62'], 'left-down');
  drawBracketLine(game['60'], game['62'], 'left-up');
  
  drawBracketLine(game['61'], game['63'], 'right');
  drawBracketLine(game['62'], game['63'], 'left');
  
  /*drawBracketLine(game['64'], game[''], 'up');
  drawBracketLine(game['65'], game[''], 'up');
  drawBracketLine(game['66'], game[''], 'up');
  drawBracketLine(game['67'], game[''], 'up');*/
}

function initializeRound1TeamInfo(data) {
  const teams = data;

  teams.forEach(team => {
    const mappedId = team.id < 10 ? `team_0${team.id}` : `team_${team.id}`;
    const teamContainer = document.getElementById(mappedId);
    
    if (teamContainer) {
      const logoContainer = teamContainer.querySelector('.logo_container');
      const seedContainer = teamContainer.querySelector('.seed');
      const teamNameContainer = teamContainer.querySelector('.team_name');
      const emojiContainer = teamContainer.querySelector('.emoji');
      
	  if (team.id >= 33 && team.id <= 64) {
        teamContainer.classList.add('right-side');
      }
	  
      if (logoContainer) {
        logoContainer.style.backgroundImage = `url('./logos/${team.logo}')`;
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
