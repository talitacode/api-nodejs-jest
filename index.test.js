// index.test.js
const { requestListener } = require('./index');

test('requestListener responde com status 200 e mensagem correta', () => {
  const mockRequest = {};
  const mockResponse = {
    writeHead: jest.fn(),
    end: jest.fn(),
  };

    requestListener(mockRequest, mockResponse);

    expect(mockResponse.writeHead).toHaveBeenCalledWith(200, { 'Content-Type': 'text/plain' });
  expect(mockResponse.end).toHaveBeenCalledWith('Server mncode');
});
