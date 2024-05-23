import axios from "axios";

interface EmailData {
  name: string;
  email: string;
  message: string;
}

const sendEmail = async (emailData: EmailData): Promise<boolean> => {
  try {
    const response = await axios.post("/api/send", { ...emailData });

    if (response.status === 200) {
      return true;
    }
    console.log("email sending failed");
    return false;
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error;
  }
};

export { sendEmail };
