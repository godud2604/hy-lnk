export default async function handler(req: any, res: any) {
    try {
      const response = await fetch('https://us-central1-hy-lnk-453912.cloudfunctions.net/hello_world', {
        method: 'GET'
      });
      const text = await response.text();
      res.status(200).json({ message: text });
    } catch (error: Error | unknown) {
      res.status(500).json({ error: 'Python Cloud Function 호출 실패' });
    }
  }
  