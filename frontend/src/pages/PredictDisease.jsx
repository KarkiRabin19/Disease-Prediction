import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import Select from "react-select";
import { BsArrowDown } from "react-icons/bs";

const API_BASE_URL = import.meta.env.VITE_API_URL;
function PredictDisease() {
  const symptoms = [
    "Itching",
    "Skin Rash",
    "Nodal Skin Eruptions",
    "Continuous Sneezing",
    "Shivering",
    "Chills",
    "Joint Pain",
    "Stomach Pain",
    "Acidity",
    "Ulcers On Tongue",
    "Muscle Wasting",
    "Vomiting",
    "Burning Micturition",
    "Spotting Urination",
    "Fatigue",
    "Weight Gain",
    "Anxiety",
    "Cold Hands And Feets",
    "Mood Swings",
    "Weight Loss",
    "Restlessness",
    "Lethargy",
    "Patches In Throat",
    "Irregular Sugar Level",
    "Cough",
    "High Fever",
    "Sunken Eyes",
    "Breathlessness",
    "Sweating",
    "Dehydration",
    "Indigestion",
    "Headache",
    "Yellowish Skin",
    "Dark Urine",
    "Nausea",
    "Loss Of Appetite",
    "Pain Behind The Eyes",
    "Back Pain",
    "Constipation",
    "Abdominal Pain",
    "Diarrhoea",
    "Mild Fever",
    "Yellow Urine",
    "Yellowing Of Eyes",
    "Acute Liver Failure",
    "Fluid Overload",
    "Swelling Of Stomach",
    "Swelled Lymph Nodes",
    "Malaise",
    "Blurred And Distorted Vision",
    "Phlegm",
    "Throat Irritation",
    "Redness Of Eyes",
    "Sinus Pressure",
    "Runny Nose",
    "Congestion",
    "Chest Pain",
    "Weakness In Limbs",
    "Fast Heart Rate",
    "Pain During Bowel Movements",
    "Pain In Anal Region",
    "Bloody Stool",
    "Irritation In Anus",
    "Neck Pain",
    "Dizziness",
    "Cramps",
    "Bruising",
    "Obesity",
    "Swollen Legs",
    "Swollen Blood Vessels",
    "Puffy Face And Eyes",
    "Enlarged Thyroid",
    "Brittle Nails",
    "Swollen Extremeties",
    "Excessive Hunger",
    "Extra Marital Contacts",
    "Drying And Tingling Lips",
    "Slurred Speech",
    "Knee Pain",
    "Hip Joint Pain",
    "Muscle Weakness",
    "Stiff Neck",
    "Swelling Joints",
    "Movement Stiffness",
    "Spinning Movements",
    "Loss Of Balance",
    "Unsteadiness",
    "Weakness Of One Body Side",
    "Loss Of Smell",
    "Bladder Discomfort",
    "Foul Smell Of Urine",
    "Continuous Feel Of Urine",
    "Passage Of Gases",
    "Internal Itching",
    "Toxic Look (Typhos)",
    "Depression",
    "Irritability",
    "Muscle Pain",
    "Altered Sensorium",
    "Red Spots Over Body",
    "Belly Pain",
    "Abnormal Menstruation",
    "Dischromic Patches",
    "Watering From Eyes",
    "Increased Appetite",
    "Polyuria",
    "Family History",
    "Mucoid Sputum",
    "Rusty Sputum",
    "Lack Of Concentration",
    "Visual Disturbances",
    "Receiving Blood Transfusion",
    "Receiving Unsterile Injections",
    "Coma",
    "Stomach Bleeding",
    "Distention Of Abdomen",
    "History Of Alcohol Consumption",
    "Fluid Overload",
    "Blood In Sputum",
    "Prominent Veins On Calf",
    "Palpitations",
    "Painful Walking",
    "Pus Filled Pimples",
    "Blackheads",
    "Scurring",
    "Skin Peeling",
    "Silver Like Dusting",
    "Small Dents In Nails",
    "Inflammatory Nails",
    "Blister",
    "Red Sore Around Nose",
    "Yellow Crust Ooze",
    "Prognosis"
  ];

  const [predictionData, setPredictionData] = useState({
    prediction: "",
    description: "",
    precautions: [],
  });

  const [selectedSymptoms, setSelectedSymptoms] = useState({
    symptom1: "",
    symptom2: "",
    symptom3: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const handlePredict = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/diseasepredict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          symptom1: { value: selectedSymptoms.symptom1.value },
          symptom2: { value: selectedSymptoms.symptom2.value },
          symptom3: { value: selectedSymptoms.symptom3.value },
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.error) {
        console.error("Error predicting disease:", data.error);
      } else {
        setPredictionData({
          prediction: data.prediction,
          description: data.description,
          precautions: data.precautions,
          specialize: data.specialize,
        });
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error("Error predicting disease:", error.message);
    } finally{
      setLoading(false)
    }
  };
  const handleSymptomChange = (value, actionMeta) => {
    setSelectedSymptoms((prevState) => ({
      ...prevState,
      [actionMeta.name]: value,
    }));
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const symptomsOptions = symptoms.map((symptom) => ({
    value: symptom,
    label: symptom,
  }));
  return (
    <div className="">
      <div className="w-full h-[200px] bg-img2 relative">
        <div className="w-full h-full bg-black/30  bg-opacity-30 ">
          <h1 className="flex flex-col justify-center items-center w-full h-full text-3xl font-bold text-gray-100">
            Advanced Disease Prediction{" "}
            <span className="font-semibold text-2xl italic text-gray-300">
              "Empowering Health Through Technology"
            </span>
          </h1>
          <p className="absolute bottom-5 left-2 text-xs text-gray-300 flex items-center">
            {" "}
            <BsArrowDown size={30} className="p-2 animate-bounce"/>
            Scroll down to predict
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between p-10  bg-gray-100">
        <div className="w-1/2 flex justify-center items-center">
          <h2 className="text-[#51829B] capitalize text-6xl">
            How does it work?
          </h2>
        </div>
        <div className="w-2/3 flex justify-center items-center text-gray-700">
          <ul className="px-2">
            <li className="py-2 px-2 border-l-2 border-lightText mb-2 text-justify">
              Our model is trained on extensive and diverse datasets,
              facilitating comprehensive learning. It is rigorously tested,
              achieving a remarkable 98.99% accuracy rate in disease prediction,
              ensuring reliable and effective healthcare outcomes.
            </li>
            <li className="py-2 px-2 border-l-2 border-lightText mb-2 text-justify">
              Utilizing supervised learning and advanced Machine Learning
              algorithms, our model maps symptoms to diseases during training.
              This approach ensures precise predictions and empowers proactive
              healthcare interventions.
            </li>
            <li className="py-2 px-2 border-l-2 border-lightText mb-2 text-justify">
              The outcome is a robust disease prediction system capable of
              accurately identifying health conditions based on symptoms,
              enabling timely interventions and informed healthcare decisions
              for improved patient outcomes.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full py-40 font-text bg-gradient-to-br from-[#e0d9d9] to-[#3d7db4]">
        <div className="flex justify-center items-center mt-10 ">
          <form className="">
            <div className="flex">
              <div className="mx-5 ">
                <label>
                  Symptom 1:
                  <Select
                    name="symptom1"
                    className="capitalize mx-2 w-[250px]"
                    value={selectedSymptoms.symptom1}
                    onChange={handleSymptomChange}
                    options={symptomsOptions}
                    placeholder="--Symptom--"
                    isClearable
                  />
                </label>
              </div>
              <div className="mx-3">
                <label>
                  Symptom 2:
                  <Select
                    name="symptom2"
                    className="capitalize mx-2 w-[250px]"
                    value={selectedSymptoms.symptom2}
                    onChange={handleSymptomChange}
                    options={symptomsOptions}
                    placeholder="--Symptom--"
                    isClearable
                  />
                </label>
              </div>
              <div className="mx-3">
                <label>
                  Symptom 3:
                  <Select
                    name="symptom3"
                    className="capitalize mx-2 w-[250px]"
                    value={selectedSymptoms.symptom3}
                    onChange={handleSymptomChange}
                    options={symptomsOptions}
                    placeholder="--Symptom--"
                    isClearable
                  />
                </label>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={handlePredict}
                className={`px-4 py-2 rounded mt-5 ${
                  selectedSymptoms.symptom1 && selectedSymptoms.symptom2 && selectedSymptoms.symptom3
                    ? "bg-[#93C6E7] cursor-pointer"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
                disabled={
                  !selectedSymptoms.symptom1 ||
                  !selectedSymptoms.symptom2 ||
                  !selectedSymptoms.symptom3
                }
              >
                {loading ? "Predicting..." : "Predict"}
              </button>
            </div>
          </form>
          {/* Render the prediction  */}
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm">
              <div className="bg-white p-8 rounded-2xl shadow-2xl w-[500px] relative border border-gray-100 animate-fadeIn">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#60A5FA] to-[#A7F3D0] -mx-8 -mt-8 px-8 py-4 rounded-t-2xl">
                  <h2 className="text-2xl font-extrabold text-gray-900">
                    🩺 Predicted Disease
                  </h2>
                  <p className="text-lg font-semibold text-gray-800 mt-1">
                    {predictionData.prediction}
                  </p>
                </div>

                {/* Body */}
                <div className="mt-6 space-y-4 text-gray-700">
                  <div>
                    <p className="font-semibold text-sm text-gray-800">
                      What is {predictionData.prediction}?
                    </p>
                    <p className="text-sm text-justify leading-relaxed text-gray-600 mt-1">
                      {predictionData.description}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-sm text-gray-800">
                      Precautions for {predictionData.prediction}:
                    </p>
                    <ul className="text-sm list-disc ml-5 text-gray-600 leading-relaxed">
                      {Array.isArray(predictionData.precautions)
                        ? predictionData.precautions.map((p, i) => (
                            <li key={i}>{p}</li>
                          ))
                        : <li>{predictionData.precautions}</li>}
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <p className="text-sm text-gray-700">
                      We recommend consulting a{" "}
                      <span className="font-semibold text-[#2563EB]">
                        {predictionData.specialize}
                      </span>{" "}
                      for professional advice.
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-6 border-t border-gray-200"></div>

                {/* Footer */}
                <div className="flex flex-col items-center">
                  <p className="text-sm text-gray-600 mb-4 text-center">
                    Would you like to book an appointment with a{" "}
                    <span className="font-semibold text-[#2563EB]">
                      {predictionData.specialize}
                    </span>{" "}
                    specialist?
                  </p>

                  <a
                    href="/book"
                    className="w-full text-center py-3 rounded-xl font-bold text-white bg-gradient-to-r from-[#3B82F6] to-[#10B981] hover:opacity-90 transition duration-300"
                  >
                    Book Appointment
                  </a>
                </div>

                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-5 text-gray-500 hover:text-gray-800 transition"
                >
                  <MdClose size={22} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PredictDisease;
