import {
  Container, Breadcrumb,
  Tabs, Tab,
  Table, Pagination,
  ProgressBar, Collapse,
  Nav,
  Navbar, Button,
  OverlayTrigger,
  Popover,
  Form, FormControl
} from "react-bootstrap"
import React, {Component} from "react";
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      buka: true
    };
  }
  render(){
    const munculPopover = <Popover title="informasi">
      Website ini dibuat untuk memudahkan
      dalam pencarian informasi terkini
      tentang berita olahraga
      </Popover>
  
    return(
      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Akses Sport</Navbar.Brand>
          <Nav>
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">Berita</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">Live Scores</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">Piala & Liga</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">Transfer Pemain</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">Tim</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Form>
          <FormControl type="text" placeholder="Search" /> 
          <Button variant="outline-info">Search</Button>
          </Form>
            </Nav.Item>
          </Nav>

        </Navbar>

        
        <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/">Liga Inggris</Breadcrumb.Item>
        <Breadcrumb.Item href="/">Transfer Pemain</Breadcrumb.Item>
        </Breadcrumb>
        <h3>Rumor Transfer Pemain</h3>
        <Tabs defaultActiveKey="transfer">
        <Tab eventKey="transfer" title="Semua Transfer">
        
        </Tab>
        <Tab eventKey="primer" title="Liga Primer Inggris">
          <p>Contoh Halaman Info</p>
        </Tab>
        <Tab eventKey="primer" title="Serie A">
          <p>Contoh Halaman Info</p>
        </Tab>
        <Tab eventKey="primer" title="Divisi Primera">
          <p>Contoh Halaman Info</p>
        </Tab>
        <Tab eventKey="primer" title="Bundes Liga">
          <p>Contoh Halaman Info</p>
        </Tab>
        <Tab eventKey="primer" title="Liga 1 Indonesia">
          <p>Contoh Halaman Info</p>
        </Tab>
        </Tabs>

        <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nama Pemain</th>
            <th>Tim</th>
            <th>Transfer</th>
            <th>Proses Transfer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>MARQUANE FELLAINI</td>
            <td>MANCHESTER UNITED</td>
            <td>SHANDONG LUNENG</td>
            <td><ProgressBar now={80} label="80%"></ProgressBar></td>
          </tr>
          <tr>
            <td>2</td>
            <td>LUIS NANI</td>
            <td>SPORTING CP</td>
            <td>ORLANDO CITY</td>
            <td><ProgressBar now={55} label="55%"></ProgressBar></td>
          </tr>
          <tr>
            <td>3</td>
            <td>MAREK HAMSIK</td>
            <td>NAPOLI</td>
            <td>DALIAN YIFANG</td>
            <td><ProgressBar now={95} label="95%"></ProgressBar></td>
          </tr>
          <tr>
            <td>4</td>
            <td>SARDAR AZMOUN</td>
            <td>RUBIN KAZAN</td>
            <td>ZENIT ST PETERSBURG</td>
            <td><ProgressBar now={100} label="100%"></ProgressBar></td>
          </tr>
          <tr>
            <td>5</td>
            <td>MICHY BATSHUAYI</td>
            <td>CHELSEA</td>
            <td>CRYSTAL PALACE</td>
            <td><ProgressBar now={50} label="50%"></ProgressBar></td>
          </tr>
          <tr>
            <td>6</td>
            <td>LUCAS PIAZON</td>
            <td>CHELSEA</td>
            <td>CHIEVO</td>
            <td><ProgressBar now={100} label="100%"></ProgressBar></td>
          </tr>
        </tbody>
      </Table>
      <Pagination size="sm">
            <Pagination.Item active>1</Pagination.Item>
            <Pagination.Item>2</Pagination.Item>
            <Pagination.Item>3</Pagination.Item>
            <Pagination.Item>4</Pagination.Item>
            <Pagination.Item>5</Pagination.Item>
            <Pagination.Item>6</Pagination.Item>
            <Pagination.Item>7</Pagination.Item>
            <Pagination.Item>8</Pagination.Item>
            <Pagination.Item>9</Pagination.Item>
            <Pagination.Item>10</Pagination.Item>
            <Pagination.Item>11</Pagination.Item>
            <Pagination.Item>12</Pagination.Item>
            <Pagination.Item>13</Pagination.Item>
            <Pagination.Item>14</Pagination.Item>
            <Pagination.Item>15</Pagination.Item>
            <Pagination.Item>16</Pagination.Item>
            <Pagination.Item>17</Pagination.Item>
            <Pagination.Item>18</Pagination.Item>
            <Pagination.Item>19</Pagination.Item>
            <Pagination.Item>20</Pagination.Item>
          </Pagination>
          <OverlayTrigger trigger="click" placement="right" overlay={munculPopover}>
            <Button variant="primary">Munculkan Overlay</Button>
          </OverlayTrigger>
          <Button 
            variant="primary"
            onClick={() => this.setState({ buka: !this.state.buka})}
            >Visit Website</Button>
            <Collapse in={this.state.buka}>
             <p>Akses Sport V1.0</p>
            </Collapse>
      </Container>
    );
  }
}

export default App;
