from flask import Flask, render_template, request, jsonify
import pandas as pd
import numpy as np

app = Flask(__name__)

# Load the hospital data from a CSV file
hospitals_df = pd.read_csv("hospital_data.csv")


# Define the model function to predict the best hospitals based on user input
def predict_hospitals(disease):
    # Filter hospitals based on the disease
    filtered_hospitals_df = hospitals_df[hospitals_df['disease'].str.contains(disease, case=False, na=False)].sort_values(by='distance')

    # Convert the filtered hospitals DataFrame to a list of dictionaries
    hospitals_list = filtered_hospitals_df.to_dict(orient='records')

    return hospitals_list


# Define the model function to predict hospitals based on distance range
def predict_hospitals_distance(max_distance):
    # Filter hospitals based on the distance range
    filtered_hospitals_df = hospitals_df[hospitals_df['distance'] <= max_distance].sort_values(by='distance')

    # Convert the filtered hospitals DataFrame to a list of dictionaries
    hospitals_list = filtered_hospitals_df.to_dict(orient='records')

    return hospitals_list


# Define a route to render the form
@app.route('/')
def form():
    return render_template('index.html')


# Define a route to handle form submissions
@app.route('/predict', methods=['POST'])
def predict():
    # Get the input parameters from the form submission
    disease = request.form['disease']

    best_hospitals = predict_hospitals(disease)

    if isinstance(best_hospitals, str):
        return best_hospitals
    else:
        return render_template('result.html', best_hospitals=best_hospitals)    
    

# Define a route to handle form submissions for distance-based prediction
@app.route('/predict-distance', methods=['POST'])
def predict_distance():
    # Get the input parameter from the form submission
    max_distance = float(request.form['max_distance'])

    best_hospitals = predict_hospitals_distance(max_distance)

    if isinstance(best_hospitals, str):
        return best_hospitals
    else:
        return render_template('result.html', best_hospitals=best_hospitals)
    
    
# Define a route to handle the selection of a hospital
@app.route('/book', methods=['POST'])
def book_hospital():
    # Get the selected hospital ID from the form submission
    hospital_id = int(request.form['hospital_id'].replace('Hospital ', ''))

    # Reduce the beds count of the selected hospital by 1
    hospitals_df.loc[hospitals_df['hid'] == hospital_id, 'beds'] -= 1
    # Return a success message
    return """
        <script>
            alert('Hospital booked successfully. Bed count reduced.');
            window.location.href = '/';  // Redirect to the home page
        </script>
    """


if __name__ == '__main__':
    app.run(debug=True)
