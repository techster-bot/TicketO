from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

# Database connection
def get_db():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="pass123",  # change if different
        database="ticketo_db"
    )

@app.route("/api/events", methods=["GET"])
def get_events():
    conn = get_db()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM events")
    events = cursor.fetchall()
    conn.close()
    return jsonify(events)

@app.route("/api/events", methods=["POST"])
def add_event():
    data = request.json
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO events (title, price, date, img) VALUES (%s, %s, %s, %s)",
        (data["title"], data["price"], data["date"], data["img"]),
    )
    conn.commit()
    conn.close()
    return jsonify({"message": "Event added successfully"})

@app.route("/api/events/<int:event_id>", methods=["PUT"])
def update_event(event_id):
    data = request.json
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute(
        "UPDATE events SET title=%s, price=%s, date=%s, img=%s WHERE id=%s",
        (data["title"], data["price"], data["date"], data["img"], event_id),
    )
    conn.commit()
    conn.close()
    return jsonify({"message": "Event updated successfully"})

@app.route("/api/events/<int:event_id>", methods=["DELETE"])
def delete_event(event_id):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM events WHERE id=%s", (event_id,))
    conn.commit()
    conn.close()
    return jsonify({"message": "Event deleted successfully"})

if __name__ == "__main__":
    app.run(debug=True)
