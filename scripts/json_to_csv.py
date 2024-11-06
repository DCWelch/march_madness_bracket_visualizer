import json
import csv

bracket_data = 

def json_to_csv(data, filename):
    with open(filename, mode='w', newline='') as file:
        writer = csv.writer(file)
        headers = data[0].keys()
        writer.writerow(headers)
        for row in data:
            writer.writerow(row.values())

json_to_csv(bracket_data, 'bracket_data.csv')
print("JSON converted to 'bracket_data.csv'")
