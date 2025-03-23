// pages/api/call-python.js
export default async function handler(req, res) {
    try {
      const response = await fetch('https://us-central1-hy-lnk-453912.cloudfunctions.net/hello_world', {
        method: 'GET'
      });
      const text = await response.text();
      res.status(200).json({ message: text });
    } catch (error) {
      res.status(500).json({ error: 'Python Cloud Function 호출 실패' });
    }
  }
  