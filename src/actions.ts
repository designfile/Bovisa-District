"use server";

export async function SendBookVisitData(formData: FormData): Promise<{
  message: string;
}> {
  console.log("formData", formData);

  const name = formData.get("name");
  const email = formData.get("email");
  const phone_number = formData.get("phone_number");
  const work_area = formData.get("work_area");

  const data = {
    name,
    email,
    phone_number,
    work_area,
  };
  console.log(data);

  return {
    message: "Data has been send successfully!",
  };
}
