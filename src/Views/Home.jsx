import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Components/Card";
import Button from "../Components/Button";
import Alert from "../Components/Alert";

const Home = () => {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to ProactiCare</h1>

      <Card title="Introduction">
        <p>
          This is a demo Javscript React app designed to give you a helpful
          starting point for your app development workshop.
        </p>
      </Card>
      <Card title="Workshop Task">
        <p>
          Build a simple web page with a form that users can fill out. This is a
          fun way to practice React Javascript & CSS
        </p>

        <p>
          <strong>Instructions:</strong>
        </p>
        <ol>
          <li>
            Click the button below to open a blank page to experiment with.
          </li>
          <li>
            Create a form that includes:
            <ul>
              <li>
                Text input for <strong>Name</strong>
              </li>
              <li>
                Email input for <strong>Email</strong>
              </li>
              <li>
                Number input for <strong>Age</strong>
              </li>
              <li>
                Dropdown (select) for{" "}
                <strong>Favourite Programming Language</strong>
              </li>
              <li>Submit button</li>
            </ul>
          </li>
          <li>Style your form using CSS to make it look nice.</li>
          <li>
            Optional: Add JavaScript to show a <em>thank you message</em> on
            form submission.
          </li>
        </ol>

        <Button
          label="Open Workshop Page"
          onClick={() => navigate("/workshop")}
        />
      </Card>

      <Card title="Help to get started">
        <p>
          Using reusable components makes building apps much easier. Click below
          to see an alert!
        </p>
        <Button label="Show Alert" onClick={() => setShowAlert(true)} />
        {showAlert && (
          <Alert
            type="success"
            message="Congratulations! You clicked the button."
          />
        )}
      </Card>

      <Card title="Try navigation!">
        <p>Try visiting the other pages using these buttons:</p>
        <Button
          label="Link to blank page"
          onClick={() => navigate("/blankPage")}
          style={{ marginLeft: "10px" }}
        />
        <p>See a helpful database connection example here</p>
        <Button
          label="Link to example"
          onClick={() => navigate("/workshop")}
          style={{ marginLeft: "10px" }}
        />
      </Card>
    </div>
  );
};

export default Home;
