import axios, { AxiosResponse } from 'axios';

interface LoginResponse {
  token: string;
}

async function login(username: string, password: string): Promise<void> {
  const apiUrl = 'http://10.1.31.102/api/auth/login'; // URL ของ API สำหรับเข้าสู่ระบบ

  try {
    const response: AxiosResponse<LoginResponse> = await axios.post(apiUrl, {
      username,
      password,
    });

    // ตรวจสอบสถานะการตอบกลับ
    if (response.status === 200) {
      const { token } = response.data;
      console.log('Token:', token);
    } else {
      console.log('ไม่สามารถเข้าสู่ระบบได้');
    }
  } catch {
    console.error('เกิดข้อผิดพลาด:');
  }
}

// เรียกใช้ฟังก์ชันสำหรับเข้าสู่ระบบ
login('ชื่อผู้ใช้', 'รหัสผ่าน');