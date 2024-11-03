
/* JS for the March Madness Bracket Visualizer */

const settings = {
  "show_first_four": 1,       /* 0 = Hides the First Four matches,           1 = Shows the First Four matches */
  "show_winner": 1,           /* 0 = Hides the champion box,                 1 = Shows the champion box */
  "populate_round_1": 1,      /* 0 = Leaves the round of 64 matches blank,   1 = Populates the round of 64 matches */
  "populate_round_2": 1,      /* 0 = Leaves the round of 32 matches blank,   1 = Populates the round of 32 matches */
  "populate_round_3": 1,      /* 0 = Leaves the sweet 16 matches blank,      1 = Populates the round sweet 16 matches */
  "populate_round_4": 1,      /* 0 = Leaves the elite 8 matches blank,       1 = Populates the round elite 8 matches */
  "populate_round_5": 1,      /* 0 = Leaves the Final Four matches blank,    1 = Populates the Final Four matches */
  "populate_round_6": 1,      /* 0 = Leaves the Championship match blank,    1 = Populates the championship match */
  "populate_round_7": 1,      /* 0 = Leaves the champion box blank,          1 = Populates the champion box */
  "populate_first_four": 1,   /* 0 = Leaves the First Four matches blank,    1 = Populates the First Four matches */
  "right_flip": 0,            /* 0 = Leaves the champion box blank,          1 = Populates the champion box */
  "final_four_flare": 0,      /* 0 = Use the default styling for Final Four, 1 = Adds some Zhuzh to the Final Four matches */
  "finals_flare": 0,          /* 0 = Use the default styling for final,      1 = Adds some Zhuzh to the championship match */
  "winner_flare": 0,          /* 0 = Use the default styling for champion,   1 = Adds some Zhuzh to the champion box */
  "grayscale_on_loss": 0,     /* 0 = Does not alter teams,                   1 = Turns teams that have lost to greyscale */
  "transparency_on_loss": 0,  /* 0 = Does not alter teams,                   1 = Gives teams that have lost 50% opacity */
  "strikethrough_on_loss": 0, /* 0 = Does not alter teams,                   1 = Puts a strikethrough on the team name of teams that have lost */
  "show_region_labels": 0,    /* 0 = Hides the region labels,                1 = Displays the region labels */
  "show_logos": 0             /* 0 = Hides the logos,                        1 = Shows logos */
};

const logoMapping = [
  { "team": "UConn", "logo": "uconn.svg" },
  { "team": "Stetson", "logo": "stetson.svg" },
  { "team": "FAU", "logo": "fla-atlantic.svg" },
  { "team": "Northwestern", "logo": "northwestern.svg" },
  { "team": "San Diego St.", "logo": "san-diego-st.svg" },
  { "team": "UAB", "logo": "uab.svg" },
  { "team": "Auburn", "logo": "auburn.svg" },
  { "team": "Yale", "logo": "yale.svg" },
  { "team": "BYU", "logo": "byu.svg" },
  { "team": "Duquesne", "logo": "duquesne.svg" },
  { "team": "Illinois", "logo": "illinois.svg" },
  { "team": "Morehead St.", "logo": "morehead-st.svg" },
  { "team": "Washington St.", "logo": "washington-st.svg" },
  { "team": "Drake", "logo": "drake.svg" },
  { "team": "Iowa St.", "logo": "iowa-st.svg" },
  { "team": "S. Dakota St.", "logo": "south-dakota-st.svg" },
  { "team": "North Carolina", "logo": "north-carolina.svg" },
  { "team": "Wagner", "logo": "wagner.svg" },
  { "team": "Mississippi St.", "logo": "mississippi-st.svg" },
  { "team": "Michigan St.", "logo": "michigan-st.svg" },
  { "team": "Saint Mary's", "logo": "st-marys-ca.svg" },
  { "team": "Grand Canyon", "logo": "grand-canyon.svg" },
  { "team": "Alabama", "logo": "alabama.svg" },
  { "team": "Charleston", "logo": "col-of-charleston.svg" },
  { "team": "Clemson", "logo": "clemson.svg" },
  { "team": "New Mexico", "logo": "new-mexico.svg" },
  { "team": "Baylor", "logo": "baylor.svg" },
  { "team": "Colgate", "logo": "colgate.svg" },
  { "team": "Dayton", "logo": "dayton.svg" },
  { "team": "Nevada", "logo": "nevada.svg" },
  { "team": "Arizona", "logo": "arizona.svg" },
  { "team": "Long Beach St.", "logo": "long-beach-st.svg" },
  { "team": "Houston", "logo": "houston.svg" },
  { "team": "Longwood", "logo": "longwood.svg" },
  { "team": "Nebraska", "logo": "nebraska.svg" },
  { "team": "Texas A&M", "logo": "texas-am.svg" },
  { "team": "Wisconsin", "logo": "wisconsin.svg" },
  { "team": "James Madison", "logo": "james-madison.svg" },
  { "team": "Duke", "logo": "duke.svg" },
  { "team": "Vermont", "logo": "vermont.svg" },
  { "team": "Texas Tech", "logo": "texas-tech.svg" },
  { "team": "NC State", "logo": "north-carolina-st.svg" },
  { "team": "Kentucky", "logo": "kentucky.svg" },
  { "team": "Oakland", "logo": "oakland.svg" },
  { "team": "Florida", "logo": "florida.svg" },
  { "team": "Colorado", "logo": "colorado.svg" },
  { "team": "Marquette", "logo": "marquette.svg" },
  { "team": "Western Ky.", "logo": "western-ky.svg" },
  { "team": "Purdue", "logo": "purdue.svg" },
  { "team": "Grambling St.", "logo": "grambling.svg" },
  { "team": "Utah St.", "logo": "utah-st.svg" },
  { "team": "TCU", "logo": "tcu.svg" },
  { "team": "Gonzaga", "logo": "gonzaga.svg" },
  { "team": "McNeese", "logo": "mcneese.svg" },
  { "team": "Kansas", "logo": "kansas.svg" },
  { "team": "Samford", "logo": "samford.svg" },
  { "team": "S. Carolina", "logo": "south-carolina.svg" },
  { "team": "Oregon", "logo": "oregon.svg" },
  { "team": "Creighton", "logo": "creighton.svg" },
  { "team": "Akron", "logo": "akron.svg" },
  { "team": "Texas", "logo": "texas.svg" },
  { "team": "Colorado St.", "logo": "colorado-st.svg" },
  { "team": "Tennessee", "logo": "tennessee.svg" },
  { "team": "Saint Peter's", "logo": "st-peters.svg" }
];

const bracketData = [
  {
    "id": 1,
    "seed": 1,
    "team": "UConn",
    "score": 91
  },
  {
    "id": 2,
    "seed": 16,
    "team": "Stetson",
    "score": 52
  },
  {
    "id": 3,
    "seed": 8,
    "team": "FAU",
    "score": 65
  },
  {
    "id": 4,
    "seed": 9,
    "team": "Northwestern",
    "score": 77
  },
  {
    "id": 5,
    "seed": 5,
    "team": "San Diego St.",
    "score": 69
  },
  {
    "id": 6,
    "seed": 12,
    "team": "UAB",
    "score": 85
  },
  {
    "id": 7,
    "seed": 4,
    "team": "Auburn",
    "score": 76
  },
  {
    "id": 8,
    "seed": 13,
    "team": "Yale",
    "score": 78
  },
  {
    "id": 9,
    "seed": 6,
    "team": "BYU",
    "score": 67
  },
  {
    "id": 10,
    "seed": 11,
    "team": "Duquesne",
    "score": 71
  },
  {
    "id": 11,
    "seed": 3,
    "team": "Illinois",
    "score": 85
  },
  {
    "id": 12,
    "seed": 14,
    "team": "Morehead St.",
    "score": 69
  },
  {
    "id": 13,
    "seed": 7,
    "team": "Washington St.",
    "score": 86
  },
  {
    "id": 14,
    "seed": 10,
    "team": "Drake",
    "score": 61
  },
  {
    "id": 15,
    "seed": 2,
    "team": "Iowa St.",
    "score": 82
  },
  {
    "id": 16,
    "seed": 15,
    "team": "S. Dakota St.",
    "score": 65
  },
  {
    "id": 17,
    "seed": 1,
    "team": "North Carolina",
    "score": 90
  },
  {
    "id": 18,
    "seed": 16,
    "team": "Wagner",
    "score": 62
  },
  {
    "id": 19,
    "seed": 8,
    "team": "Mississippi St.",
    "score": 51
  },
  {
    "id": 20,
    "seed": 9,
    "team": "Michigan St.",
    "score": 69
  },
  {
    "id": 21,
    "seed": 5,
    "team": "Saint Mary's",
    "score": 66
  },
  {
    "id": 22,
    "seed": 12,
    "team": "Grand Canyon",
    "score": 75
  },
  {
    "id": 23,
    "seed": 4,
    "team": "Alabama",
    "score": 109
  },
  {
    "id": 24,
    "seed": 13,
    "team": "Charleston",
    "score": 96
  },
  {
    "id": 25,
    "seed": 6,
    "team": "Clemson",
    "score": 77
  },
  {
    "id": 26,
    "seed": 11,
    "team": "New Mexico",
    "score": 56
  },
  {
    "id": 27,
    "seed": 3,
    "team": "Baylor",
    "score": 92
  },
  {
    "id": 28,
    "seed": 14,
    "team": "Colgate",
    "score": 67
  },
  {
    "id": 29,
    "seed": 7,
    "team": "Dayton",
    "score": 63
  },
  {
    "id": 30,
    "seed": 10,
    "team": "Nevada",
    "score": 60
  },
  {
    "id": 31,
    "seed": 2,
    "team": "Arizona",
    "score": 85
  },
  {
    "id": 32,
    "seed": 15,
    "team": "Long Beach St.",
    "score": 65
  },
  {
    "id": 33,
    "seed": 1,
    "team": "Houston",
    "score": 86
  },
  {
    "id": 34,
    "seed": 16,
    "team": "Longwood",
    "score": 46
  },
  {
    "id": 35,
    "seed": 8,
    "team": "Nebraska",
    "score": 83
  },
  {
    "id": 36,
    "seed": 9,
    "team": "Texas A&M",
    "score": 98
  },
  {
    "id": 37,
    "seed": 5,
    "team": "Wisconsin",
    "score": 61
  },
  {
    "id": 38,
    "seed": 12,
    "team": "James Madison",
    "score": 72
  },
  {
    "id": 39,
    "seed": 4,
    "team": "Duke",
    "score": 64
  },
  {
    "id": 40,
    "seed": 13,
    "team": "Vermont",
    "score": 47
  },
  {
    "id": 41,
    "seed": 6,
    "team": "Texas Tech",
    "score": 67
  },
  {
    "id": 42,
    "seed": 11,
    "team": "NC State",
    "score": 80
  },
  {
    "id": 43,
    "seed": 3,
    "team": "Kentucky",
    "score": 76
  },
  {
    "id": 44,
    "seed": 14,
    "team": "Oakland",
    "score": 80
  },
  {
    "id": 45,
    "seed": 7,
    "team": "Florida",
    "score": 100
  },
  {
    "id": 46,
    "seed": 10,
    "team": "Colorado",
    "score": 102
  },
  {
    "id": 47,
    "seed": 2,
    "team": "Marquette",
    "score": 87
  },
  {
    "id": 48,
    "seed": 15,
    "team": "Western Ky.",
    "score": 69
  },
  {
    "id": 49,
    "seed": 1,
    "team": "Purdue",
    "score": 78
  },
  {
    "id": 50,
    "seed": 16,
    "team": "Grambling St.",
    "score": 50
  },
  {
    "id": 51,
    "seed": 8,
    "team": "Utah St.",
    "score": 88
  },
  {
    "id": 52,
    "seed": 9,
    "team": "TCU",
    "score": 72
  },
  {
    "id": 53,
    "seed": 5,
    "team": "Gonzaga",
    "score": 86
  },
  {
    "id": 54,
    "seed": 12,
    "team": "McNeese",
    "score": 65
  },
  {
    "id": 55,
    "seed": 4,
    "team": "Kansas",
    "score": 93
  },
  {
    "id": 56,
    "seed": 13,
    "team": "Samford",
    "score": 89
  },
  {
    "id": 57,
    "seed": 6,
    "team": "S. Carolina",
    "score": 73
  },
  {
    "id": 58,
    "seed": 11,
    "team": "Oregon",
    "score": 87
  },
  {
    "id": 59,
    "seed": 3,
    "team": "Creighton",
    "score": 77
  },
  {
    "id": 60,
    "seed": 14,
    "team": "Akron",
    "score": 60
  },
  {
    "id": 61,
    "seed": 7,
    "team": "Texas",
    "score": 56
  },
  {
    "id": 62,
    "seed": 10,
    "team": "Colorado St.",
    "score": 44
  },
  {
    "id": 63,
    "seed": 2,
    "team": "Tennessee",
    "score": 83
  },
  {
    "id": 64,
    "seed": 15,
    "team": "Saint Peter's",
    "score": 49
  },
  {
    "id": 65,
    "seed": 1,
    "team": "UConn",
    "score": 75
  },
  {
    "id": 66,
    "seed": 9,
    "team": "Northwestern",
    "score": 58
  },
  {
    "id": 67,
    "seed": 5,
    "team": "San Diego St.",
    "score": 52
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
  /*drawBracketLine(game['63'], game[''], 'up');*/
  /*drawBracketLine(game['64'], game[''], 'up');*/
  /*drawBracketLine(game['65'], game[''], 'up');*/
  /*drawBracketLine(game['66'], game[''], 'up');*/
  /*drawBracketLine(game['67'], game[''], 'up');*/
}

function populateBracket(data) {
  const teams = data;

  teams.forEach(team => {
	const mappedId = team.id.toString().padStart(3, '0');
    const teamContainerId = `team_${mappedId}`;
    const teamContainer = document.getElementById(teamContainerId);

    if (teamContainer) {
      const logoContainer = teamContainer.querySelector('.logo');
      const seedContainer = teamContainer.querySelector('.seed');
      const teamNameContainer = teamContainer.querySelector('.team');
      const scoreContainer = teamContainer.querySelector('.score');
      
      if (team.id >= 33 && team.id <= 64) || (team.id >= 81 && team.id <= 96) || (team.id >= 105 && team.id <= 112) || (team.id >= 117 && team.id <= 120) || (team.id == 123) || (team.id == 124) || (team.id == 126) {
        teamContainer.classList.add('right-side');
      }

      const logoData = logoMapping.find(entry => entry.team === team.team);
      
      if (logoContainer && logoData) {
        logoContainer.style.backgroundImage = `url('./logos/${logoData.logo}')`;
        logoContainer.style.backgroundSize = 'contain';
        logoContainer.style.backgroundRepeat = 'no-repeat';
      }
      if (seedContainer) {
        seedContainer.textContent = String(team.seed);
      }
      if (teamNameContainer) {
        teamNameContainer.textContent = String(team.team);
      }
      if (scoreContainer) {
        scoreContainer.textContent = String(team.score);
      }
    }
  });
}

window.onload = function() {
  populateBracket(bracketData);
  drawAllBracketLines();
};
