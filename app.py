from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
import os
from datetime import datetime

app = Flask(__name__)

# Set up the SQLite database file path
basedir = os.path.abspath(os.path.dirname(__file__))
database_file = "sqlite:///" + os.path.join(basedir, "events.db")

# Configure the SQLAlchemy part of the app instance
app.config["SQLALCHEMY_DATABASE_URI"] = database_file
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Create the SQLAlchemy db instance
db = SQLAlchemy(app)

# Define the Event model (using SQLAlchemy ORM)
class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150), nullable=False)
    venue = db.Column(db.String(100), nullable=False)
    event_date = db.Column(db.Date, nullable=False)
    image_url = db.Column(db.String(250), nullable=False)
    behance_link = db.Column(db.String(250), nullable=False)

    def __repr__(self):
        return f"<Event {self.title}>"

# Create database tables if they don't exist yet
@app.before_request
def create_tables():
    db.create_all()
        # Your setup code here



# Route to display all events (sorted by date: most recent first)
@app.route('/')
def index():
    events = Event.query.order_by(Event.event_date.desc()).all()
    return render_template('index.html', events=events)

# Route to add a new event (a simple admin interface)
@app.route('/add', methods=['GET', 'POST'])
def add_event():
    if request.method == 'POST':
        title = request.form['title']
        venue = request.form['venue']
        # Convert the date string to a datetime.date object
        event_date = datetime.strptime(request.form['event_date'], "%Y-%m-%d").date()
        image_url = request.form['image_url']
        behance_link = request.form['behance_link']
        new_event = Event(
            title=title,
            venue=venue,
            event_date=event_date,
            image_url=image_url,
            behance_link=behance_link
        )
        db.session.add(new_event)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('add_event.html')

if __name__ == '__main__':
    app.run(debug=True)
