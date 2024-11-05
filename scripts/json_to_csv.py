import json
import csv

bracket_data = [
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
  },
  {
    "id": 68,
    "seed": 13,
    "team": "Yale",
    "score": 57
  },
  {
    "id": 69,
    "seed": 11,
    "team": "Duquesne",
    "score": 63
  },
  {
    "id": 70,
    "seed": 3,
    "team": "Illinois",
    "score": 89
  },
  {
    "id": 71,
    "seed": 7,
    "team": "Washington St.",
    "score": 56
  },
  {
    "id": 72,
    "seed": 2,
    "team": "Iowa St.",
    "score": 67
  },
  {
    "id": 73,
    "seed": 1,
    "team": "North Carolina",
    "score": 85
  },
  {
    "id": 74,
    "seed": 9,
    "team": "Michigan St.",
    "score": 69
  },
  {
    "id": 75,
    "seed": 12,
    "team": "Grand Canyon",
    "score": 61
  },
  {
    "id": 76,
    "seed": 4,
    "team": "Alabama",
    "score": 72
  },
  {
    "id": 77,
    "seed": 6,
    "team": "Clemson",
    "score": 72
  },
  {
    "id": 78,
    "seed": 3,
    "team": "Baylor",
    "score": 64
  },
  {
    "id": 79,
    "seed": 7,
    "team": "Dayton",
    "score": 68
  },
  {
    "id": 80,
    "seed": 2,
    "team": "Arizona",
    "score": 78
  },
  {
    "id": 81,
    "seed": 1,
    "team": "Houston",
    "score": 100
  },
  {
    "id": 82,
    "seed": 9,
    "team": "Texas A&M",
    "score": 95
  },
  {
    "id": 83,
    "seed": 12,
    "team": "James Madison",
    "score": 55
  },
  {
    "id": 84,
    "seed": 4,
    "team": "Duke",
    "score": 93
  },
  {
    "id": 85,
    "seed": 11,
    "team": "NC State",
    "score": 79
  },
  {
    "id": 86,
    "seed": 14,
    "team": "Oakland",
    "score": 73
  },
  {
    "id": 87,
    "seed": 10,
    "team": "Colorado",
    "score": 77
  },
  {
    "id": 88,
    "seed": 2,
    "team": "Marquette",
    "score": 81
  },
  {
    "id": 89,
    "seed": 1,
    "team": "Purdue",
    "score": 80
  },
  {
    "id": 90,
    "seed": 8,
    "team": "Utah St.",
    "score": 67
  },
  {
    "id": 91,
    "seed": 5,
    "team": "Gonzaga",
    "score": 89
  },
  {
    "id": 92,
    "seed": 4,
    "team": "Kansas",
    "score": 68
  },
  {
    "id": 93,
    "seed": 11,
    "team": "Oregon",
    "score": 73
  },
  {
    "id": 94,
    "seed": 3,
    "team": "Creighton",
    "score": 86
  },
  {
    "id": 95,
    "seed": 7,
    "team": "Texas",
    "score": 58
  },
  {
    "id": 96,
    "seed": 2,
    "team": "Tennessee",
    "score": 62
  },
  {
    "id": 97,
    "seed": 1,
    "team": "UConn",
    "score": 82
  },
  {
    "id": 98,
    "seed": 5,
    "team": "San Diego St.",
    "score": 52
  },
  {
    "id": 99,
    "seed": 3,
    "team": "Illinois",
    "score": 72
  },
  {
    "id": 100,
    "seed": 2,
    "team": "Iowa St.",
    "score": 67
  },
  {
    "id": 101,
    "seed": 1,
    "team": "North Carolina",
    "score": 87
  },
  {
    "id": 102,
    "seed": 4,
    "team": "Alabama",
    "score": 89
  },
  {
    "id": 103,
    "seed": 6,
    "team": "Clemson",
    "score": 77
  },
  {
    "id": 104,
    "seed": 2,
    "team": "Arizona",
    "score": 72
  },
  {
    "id": 105,
    "seed": 1,
    "team": "Houston",
    "score": 51
  },
  {
    "id": 106,
    "seed": 4,
    "team": "Duke",
    "score": 54
  },
  {
    "id": 107,
    "seed": 11,
    "team": "NC State",
    "score": 67
  },
  {
    "id": 108,
    "seed": 2,
    "team": "Marquette",
    "score": 58
  },
  {
    "id": 109,
    "seed": 1,
    "team": "Purdue",
    "score": 80
  },
  {
    "id": 110,
    "seed": 5,
    "team": "Gonzaga",
    "score": 68
  },
  {
    "id": 111,
    "seed": 3,
    "team": "Creighton",
    "score": 75
  },
  {
    "id": 112,
    "seed": 2,
    "team": "Tennessee",
    "score": 82
  },
  {
    "id": 113,
    "seed": 1,
    "team": "UConn",
    "score": 77
  },
  {
    "id": 114,
    "seed": 3,
    "team": "Illinois",
    "score": 52
  },
  {
    "id": 115,
    "seed": 4,
    "team": "Alabama",
    "score": 89
  },
  {
    "id": 116,
    "seed": 6,
    "team": "Clemson",
    "score": 82
  },
  {
    "id": 117,
    "seed": 4,
    "team": "Duke",
    "score": 64
  },
  {
    "id": 118,
    "seed": 11,
    "team": "NC State",
    "score": 76
  },
  {
    "id": 119,
    "seed": 1,
    "team": "Purdue",
    "score": 72
  },
  {
    "id": 120,
    "seed": 2,
    "team": "Tennessee",
    "score": 66
  },
  {
    "id": 121,
    "seed": 1,
    "team": "UConn",
    "score": 86
  },
  {
    "id": 122,
    "seed": 4,
    "team": "Alabama",
    "score": 72
  },
  {
    "id": 123,
    "seed": 11,
    "team": "NC State",
    "score": 50
  },
  {
    "id": 124,
    "seed": 1,
    "team": "Purdue",
    "score": 63
  },
  {
    "id": 125,
    "seed": 1,
    "team": "UConn",
    "score": 75
  },
  {
    "id": 126,
    "seed": 1,
    "team": "Purdue",
    "score": 60
  }
];

def json_to_csv(data, filename):
    with open(filename, mode='w', newline='') as file:
        writer = csv.writer(file)
        headers = data[0].keys()
        writer.writerow(headers)
        for row in data:
            writer.writerow(row.values())

json_to_csv(bracket_data, 'bracket_data.csv')
print("JSON converted to 'bracket_data.csv'")