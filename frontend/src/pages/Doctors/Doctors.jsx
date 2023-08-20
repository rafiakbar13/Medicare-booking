import React from "react";
// import DoctorCard from "../../components/DoctorCard/DoctorCard";
import DoctorCard from "../../components/Doctors/DoctorCard";
import Testimonial from "../../components/Testimonial/Testimonial";
import { doctors } from "../../assets/data/doctors";
const Doctors = () => {
  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find A Doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="w-full py-4 pl-4 pr-2 bg-transparent cursor-pointer focus:outline-none placeholder:text-textColor"
              placeholder="Search Doctor"
            />
            <button className="mt-0 rounded-none btn">Search</button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="text-center heading">What our patient say</h2>
            <p className="text-center text__para">
              World-class care for everyone.Our Health System offers
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Doctors;
