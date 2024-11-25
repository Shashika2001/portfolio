import React, { useState } from "react";

const LatestEvents = () => {
  // Sample events data
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Tech Conference 2024",
      date: "2024-12-05",
      location: "New York, NY",
      description: "A conference exploring the latest in technology and innovation.",
    },
    {
      id: 2,
      name: "Portfolio Showcase",
      date: "2024-12-15",
      location: "San Francisco, CA",
      description: "A platform to display creative portfolios and network.",
    },
    {
      id: 3,
      name: "AI Workshop",
      date: "2024-12-20",
      location: "Online",
      description: "Learn about the latest trends in artificial intelligence.",
    },
  ]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Latest Events</h1>
      <div style={styles.eventsContainer}>
        {events.map((event) => (
          <div key={event.id} style={styles.eventCard}>
            <h2 style={styles.eventName}>{event.name}</h2>
            <p style={styles.eventDate}>📅 {new Date(event.date).toDateString()}</p>
            <p style={styles.eventLocation}>📍 {event.location}</p>
            <p style={styles.eventDescription}>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#000000",
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "20px",
  },
  eventsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
  eventCard: {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    width: "300px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  eventName: {
    fontSize: "1.5rem",
    color: "#007BFF",
  },
  eventDate: {
    fontSize: "1rem",
    color: "#555",
  },
  eventLocation: {
    fontSize: "1rem",
    color: "#555",
  },
  eventDescription: {
    fontSize: "1rem",
    color: "#333",
    marginTop: "10px",
  },
};

export default LatestEvents;
