import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendParcel = () => {
  const serviceCenters = useLoaderData();
  const duplicateRegions = serviceCenters.map((c) => c.region);
  const regions = [...new Set(duplicateRegions)];

  const {
    register,
    handleSubmit,
    // formState: { errors },
    control,
  } = useForm();
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const getDistricts = (region) => {
    const districtCenters = serviceCenters.filter((c) => c.region === region);
    const districts = districtCenters.map((d) => d.district);
    return districts;
  };

  const handleParcelSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-11/12 mx-auto py-20 px-24 bg-white rounded-4xl">
      <h2 className="text-6xl font-extrabold text-secondary mb-12">
        Send A Parcel
      </h2>
      <p className="text-3xl font-extrabold">Enter your parcel details</p>
      <form onSubmit={handleSubmit(handleParcelSubmit)}>
        <section className="border-y border-[#000000]/10 py-8 my-8 space-y-8">
          {/* getting parcel type */}
          <div>
            <label className="label mr-2">
              <input
                type="radio"
                value="document"
                {...register("parcelType")}
                className="radio radio-success"
                defaultChecked
              />
              Document
            </label>
            <label className="label">
              <input
                type="radio"
                value="non-document"
                {...register("parcelType")}
                className="radio radio-success"
              />
              Non-Document
            </label>
          </div>
          {/* getting parcel data: parcel name, parcel weight */}
          <div className="grid grid-cols-2 gap-7">
            <fieldset className="fieldset p-0">
              <label className="label font-medium text-[#0F172A]">
                Parcel Name
              </label>
              <input
                type="text"
                {...register("parcelName")}
                className="input w-full"
                placeholder="Parcel Name"
              ></input>
            </fieldset>
            <fieldset className="fieldset p-0">
              <label className="label font-medium text-[#0F172A]">
                Parcel Weight (KG)
              </label>
              <input
                type="text"
                {...register("parcelWeight")}
                className="input w-full"
                placeholder="Parcel Weight (KG)"
              ></input>
            </fieldset>
          </div>
        </section>
        <section className="grid grid-cols-2 gap-7">
          {/* sender info taking section */}
          <fieldset className="fieldset">
            <h2 className="text-secondary font-extrabold text-lg">
              Sender Details
            </h2>
            {/* sender name */}
            <label className="label font-medium text-[#0F172A]">
              Sender Name
            </label>
            <input
              type="text"
              {...register("senderName")}
              className="input w-full"
              placeholder="Sender Name"
            ></input>
            {/* sender address */}
            <label className="label font-medium text-[#0F172A]">
              Sender Address
            </label>
            <input
              type="text"
              {...register("senderAddress")}
              className="input w-full"
              placeholder="Sender Address"
            ></input>
            {/* sender phone number */}
            <label className="label font-medium text-[#0F172A]">
              Sender Email
            </label>
            <input
              type="email"
              {...register("senderEmail")}
              className="input w-full"
              placeholder="Sender Email"
            ></input>
            {/* sender region */}
            <label className="label font-medium text-[#0F172A]">
              Sender Region
            </label>
            <select
              defaultValue="Select Your Region"
              {...register("senderRegion")}
              className="select w-full"
            >
              <option disabled={true}>Select Your Region</option>
              {regions.map((r, i) => (
                <option value={r} key={i}>
                  {r}
                </option>
              ))}
            </select>
            {/* sender district */}
            <label className="label font-medium text-[#0F172A]">
              Sender District
            </label>
            <select
              defaultValue="Select Your District"
              {...register("senderDistrict")}
              className="select w-full"
            >
              <option disabled={true}>Select Your District</option>
              {getDistricts(senderRegion).map((d, i) => (
                <option value={d} key={i}>
                  {d}
                </option>
              ))}
            </select>
            {/* pickup instruction */}
            <label className="label font-medium text-[#0F172A]">
              Pickup Instruction
            </label>
            <textarea
              className="textarea h-24 w-full"
              {...register("pickupInstruction")}
              placeholder="Pickup Instruction"
            ></textarea>
          </fieldset>
          {/* receiver info taking section */}
          <fieldset className="fieldset">
            <h2 className="text-secondary font-extrabold text-lg">
              Receiver Details
            </h2>
            {/* receiver name */}
            <label className="label font-medium text-[#0F172A]">
              Receiver Name
            </label>
            <input
              type="text"
              {...register("receiverName")}
              className="input w-full"
              placeholder="Receiver Name"
            ></input>
            {/* receiver address */}
            <label className="label font-medium text-[#0F172A]">
              Receiver Address
            </label>
            <input
              type="text"
              {...register("receiverAddress")}
              className="input w-full"
              placeholder="Receiver Address"
            ></input>
            {/* receiver contact number */}
            <label className="label font-medium text-[#0F172A]">
              Receiver Email
            </label>
            <input
              type="email"
              {...register("receiverEmail")}
              className="input w-full"
              placeholder="Receiver Email"
            ></input>
            {/* receiver region */}
            <label className="label font-medium text-[#0F172A]">
              Receiver Region
            </label>
            <select
              defaultValue="Select Receiver Region"
              {...register("receiverRegion")}
              className="select w-full"
            >
              <option disabled={true}>Select Receiver Region</option>
              {regions.map((r, i) => (
                <option value={r} key={i}>
                  {r}
                </option>
              ))}
            </select>
            {/* sender district */}
            <label className="label font-medium text-[#0F172A]">
              Receiver District
            </label>
            <select
              defaultValue="Select Receiver District"
              {...register("receiverDistrict")}
              className="select w-full"
            >
              <option disabled={true}>Select Receiver District</option>
              {getDistricts(receiverRegion).map((d, i) => (
                <option value={d} key={i}>
                  {d}
                </option>
              ))}
            </select>
            {/* delivery instruction */}
            <label className="label font-medium text-[#0F172A]">
              Delivery Instruction
            </label>
            <textarea
              className="textarea h-24 w-full"
              {...register("deliveryInstruction")}
              placeholder="Delivery Instruction"
            ></textarea>
          </fieldset>
        </section>
        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-primary font-medium mt-12"
        >
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default SendParcel;
