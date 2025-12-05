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

      <Card title="Mood">
        <img 
  src="/Mood copy.png" 
  alt="Mood progress chart" 
  style={{ width: '100%' }} 
/>
       
      </Card>
      <Card title="Good morning!">
        
        <p>
          <strong>General Summary</strong>
        </p>

        <p>
          Your mood has been improving over the last few weeks - well done!
        </p>

        <p>
          Be sure to keep on eye on your blood pressure and steps this week and keep recording!
        </p>
        
      </Card>


      
    </div>
  );
};

export default Home;
