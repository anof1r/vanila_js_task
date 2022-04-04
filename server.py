from http.server import HTTPServer, BaseHTTPRequestHandler
from os import curdir, sep

class Server(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.path = '/test.html'
        try:
            file_to_open = open(self.path[1:]).read()
            self.send_response(200)
        except:
            file_to_open = "File not found =("
            #self.send_response(404)
        if self.path.endswith(".png"):
                            f = open(curdir + sep + self.path, 'rb')
                            self.send_response(200)
                            self.send_header('Content-type','/png')
                            self.end_headers()
                            self.wfile.write(f.read())
                            f.close()
                            return
        self.end_headers()
        self.wfile.write(bytes(file_to_open, 'utf-8'))


httpd = HTTPServer(('localhost', 2000), Server)
httpd.serve_forever()
