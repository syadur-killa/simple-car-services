import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const url = "http://localhost:5000/service";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h1>Please Add New Services</h1>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Name"
          className="mb-2"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          placeholder="Description"
          className="mb-2"
          {...register("description")}
        />
        <input
          placeholder="Price"
          className="mb-2"
          type="number"
          {...register("price")}
        />
        <input
          placeholder="photo URL"
          className="mb-2"
          type="text"
          {...register("img")}
        />
        <input type="submit" value="Add Services" />
      </form>
    </div>
  );
};

export default AddService;
