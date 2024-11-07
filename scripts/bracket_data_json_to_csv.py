import json
import csv
import argparse

def json_to_csv(data, filename):
    with open(filename, mode='w', newline='') as file:
        writer = csv.writer(file)
        headers = data[0].keys()
        writer.writerow(headers)
        for row in data:
            writer.writerow(row.values())

def main():
    parser = argparse.ArgumentParser(description="Convert JSON to CSV for a specific bracket.")
    parser.add_argument("filename", help="Name of the CSV file without extension (e.g., m2023 for m2023.csv)")
    
    args = parser.parse_args()
    
    bracket_file = f"{args.filename}.json"
    csv_output_file = f"{args.filename}.csv"
    
    try:
        with open(bracket_file, "r") as json_file:
            bracket_data = json.load(json_file)
        
        json_to_csv(bracket_data, csv_output_file)
        print(f"JSON from '{bracket_file}' converted to '{csv_output_file}'.")
    
    except FileNotFoundError:
        print(f"Error: File '{bracket_file}' not found.")
    except json.JSONDecodeError:
        print(f"Error: '{bracket_file}' is not a valid JSON file.")

if __name__ == "__main__":
    main()
