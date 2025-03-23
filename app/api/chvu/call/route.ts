// app/api/python/route.js
export async function GET() {
    try {
      const response = await fetch('https://us-central1-hy-lnk-453912.cloudfunctions.net/hello_world', {
        method: 'GET'
      });
      const text = await response.text();
      return Response.json({ message: text });
    } catch (error) {
      console.error('Error calling Python function:', error);
      return Response.json({ error: 'Python Cloud Function 호출 실패' }, { status: 500 });
    }
  }