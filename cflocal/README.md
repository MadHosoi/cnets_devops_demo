# CF local

- cd backend
- cf local stage cnets-chat-demo-backend -p ../../backend
- cf local run cnets-chat-demo-backend -p 9000

- cd frontend
- cf local stage cnets-chat-demo -p ../../frontend/public
- cf local run cnets-chat-demo -p 9001
