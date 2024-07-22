import { Link } from "react-router-dom";
import React from "react";

const Donation = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto text-center mt-8 p-6 bg-amber-300 text-black">
        <h2 className="text-3xl font-bold mb-4">Donate</h2>
        <p className="mb-4">
          Your support improves public health, advances education, empowers
          women and young leaders, and increases economic prosperity in the
          informal settlement of Kitale and beyond.
        </p>
      </div>

      <div className="container mx-auto mt-8 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-gradient-to-r from-red-500 to-amber-300 shadow-lg">
          <img
            src="src/assets/wow_ pics/boys_club.jpeg"
            alt="Boys Club"
            className="w-full h-48 object-cover mb-4"
          />
          <h3 className="text-xl font-bold mb-2">EngenderHealth</h3>
          <p className="mb-2">
            EngenderHealth empowers vulnerable population groups such as girls,
            <br></br>
            women, gender minorities, people with disabilities, youths, and
            <br></br>
            adolescents, by providing sexual and reproductive healthcare
            <br></br>
            systems. To support this ideology, the foundation actively takes
            <br></br>
            part in the prevention of HIV/AIDS and STIs. It also offers sexual
            <br></br>
            education, maternal healthcare, cervical cancer detection,<br></br>
            prevention, and treatment, counselling for gender violence<br></br>
            survivors, and contraceptive counselling.
          </p>
          <Link to="/donate">
            <button className="bg-red-700 text-white px-4 py-2 rounded">
              Donate
            </button>
          </Link>
        </div>

        <div className="bg-white p-6   transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-gradient-to-r from-red-500 to-amber-300 shadow-lg">
          <img
            src="src/assets/wow_ pics/girls.jpeg"
            alt="Girls Club"
            className="w-full h-48 object-cover mb-4"
          />
          <h3 className="text-xl font-bold mb-2">TEULE KENYA </h3>
          <p className="mb-2">
            To intervene into the lives of homeless /street children by<br></br>
            identfying ,developing and supporting programmes/projects for
            <br></br>
            prevention and rehabilitation purposes
          </p>
          <Link to="/donate">
            <button className="bg-red-700 text-white px-4 py-2 rounded">
              Donate
            </button>
          </Link>
        </div>

        <div className="bg-white p-6 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-gradient-to-r from-red-500 to-amber-300 shadow-lg">
          <img
            src="path/to/food_aid.jpg"
            alt="Food Aid"
            className="w-full h-48 object-cover mb-4"
          />
          <h3 className="text-xl font-bold mb-2">
            Kenyan Heart National Foundation
          </h3>
          <p className="mb-2">
            Kenyan Heart National Foundation is dedicated to reducing,<br></br>
            preventing, controlling, managing, and treating heart-related
            <br></br>
            diseases. It does this by conducting public education and awareness.
            <br></br>
            The foundation is better known for its "Make a Healthy Heart your
            <br></br>
            Goal" initiative that focuses mainly on girls and youths.<br></br>
          </p>
          <Link to="/donate">
            <button className="bg-red-700 text-white px-4 py-2 rounded">
              Donate
            </button>
          </Link>
        </div>

        <div className="bg-white p-6 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-gradient-to-r from-red-500 to-amber-300 shadow-lg">
          <img
            src="path/to/scholarship.jpg"
            alt="Scholarship"
            className="w-full h-48 object-cover mb-4"
          />
          <h3 className="text-xl font-bold mb-2">
            Tegla Loroupe Peace Foundation
          </h3>
          <p className="mb-2">
            The Tegla Loroupe Peace Foundation work in peace building
            <br></br>
            activities, as well women and youth empowerment through various
            <br></br>
            methods including sports, educating community members about their
            <br></br>
            rights and training groups in how to engage government officials to
            <br></br>
            seek change.
          </p>
          <Link to="/donate">
            <button className="bg-red-700 text-white px-4 py-2 rounded">
              Donate
            </button>
          </Link>
        </div>

        <div className="bg-white p-6 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-gradient-to-r from-red-500 to-amber-300 shadow-lg">
          <img
            src="path/to/medical_support.jpg"
            alt="Medical Support"
            className="w-full h-48 object-cover mb-4"
          />
          <h3 className="text-xl font-bold mb-2">GREEN AFRICA SOCIETY </h3>
          <p className="mb-2">
            Giving people chances to engage in positive,creative and productive
            <br></br>
            activities using existing resources in order to improve their
            <br></br>
            liveihood.
          </p>
          <Link to="/donate">
            <button className="bg-red-700 text-white px-4 py-2 rounded">
              Donate
            </button>
          </Link>
        </div>

        <div className="bg-white p-6 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-gradient-to-r from-red-500 to-amber-300 shadow-lg">
          <img
            src="path/to/medical_support.jpg"
            alt="Medical Support"
            className="w-full h-48 object-cover mb-4"
          />
          <h3 className="text-xl font-bold mb-2">MATHARE JUNIOR CENTRE </h3>
          <p className="mb-2">
            Poverty alleviation through rehabilitation and capacity building i.e
            education, character training, boarding and welfare, vocational
            training, investment.
            <br></br>
            liveihood.
          </p>
          <Link to="/donate">
            <button className="bg-red-700 text-white px-4 py-2 rounded">
              Donate
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Donation;
