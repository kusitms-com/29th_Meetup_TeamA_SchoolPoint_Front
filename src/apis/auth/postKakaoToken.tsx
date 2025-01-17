import axios from "axios";

interface PostKakaoTokenResponse {
  accessToken?: string;
  refreshToken?: string;
  registerToken?: string;
}

export async function postKakaoToken(
  accessToken: string
): Promise<PostKakaoTokenResponse> {
  try {
    const response = await axios.post<PostKakaoTokenResponse>(
      "https://api.ncp.simproject.kr/api/v1/auth/login/KAKAO",
      {
        accessToken: accessToken,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to login with Kakao: " + error);
  }
}

export default postKakaoToken;
