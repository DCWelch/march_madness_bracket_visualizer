# This file converts csv bracket data to json format
# 

import json
import csv
import argparse

def csv_to_json(csv_file, json_file):
    with open(csv_file, mode='r') as file:
        reader = csv.DictReader(file)
        data = [row for row in reader]
    
    with open(json_file, mode='w') as file:
        json.dump(data, file, indent=4)

def main():
    parser = argparse.ArgumentParser(description="Convert CSV to JSON for a specific bracket.")
    parser.add_argument("filename", help="Name of the file without extension (e.g. 'm2023' for m2023.csv input to m2023.json output)")
    
    args = parser.parse_args()
    
    csv_input_file = f"data/{args.filename}.csv"
    json_output_file = f"data/{args.filename}.json"
    
    try:
        csv_to_json(csv_input_file, json_output_file)
        print(f"CSV from '{csv_input_file}' converted to JSON as '{json_output_file}'.")
    
    except FileNotFoundError:
        print(f"Error: File '{csv_input_file}' not found.")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()
