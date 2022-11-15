import {getByTestId, render, screen, waitFor} from '@testing-library/react';
import AppBarWithDrawer from "../Components/AppBar";
import {MemoryRouter} from "react-router-dom";
import MiniDrawer from "../Components/Drawer";
import PatientInfo from "../Components/PatientInfo";
import Popup from "../Components/Popup";
import SideBar from "../Components/SideBar";
import {Form} from "../Components/useForm";
import UseTable from "../Components/useTable";

test('App Bar Check', () => {
  render(<MemoryRouter><AppBarWithDrawer /></MemoryRouter>);
  const linkElement = screen.queryByTestId("appBar");
  waitFor(()=>expect(getByTestId(linkElement)).toBeInTheDocument());
});

let patient =  {
          name: 'mannan',
          gender: 'male',
          age: 20,
          bloodType: 'A+',
          heartRate: 30,
          temperature:50,
          glucose:70,
          allergies:['kdasm','askdk'],
          diseases:['diabetes','diarhea'],
          tests:[{name:'testing',date:new Date().toLocaleDateString()},{name:'otherTest',date:new Date().toLocaleDateString()},{name:'secondTest',date:new Date().toLocaleDateString()}],
          prescriptions:[],
          height:50,
          weight:70,
          image:'',
      }
test('Drawer Check', () => {
  render(<MemoryRouter><MiniDrawer /></MemoryRouter>);
  const linkElement = screen.queryByTestId("drawer");
  waitFor(()=>expect(getByTestId(linkElement)).toBeInTheDocument());
});

test('Patient Info Check', () => {
  render(<MemoryRouter><PatientInfo patient={patient}/></MemoryRouter>);
  const linkElement = screen.queryByTestId("patientInfo");
  waitFor(()=>expect(getByTestId(linkElement)).toBeInTheDocument());
});

test('Popup Check', () => {
    render(<MemoryRouter><Popup/></MemoryRouter>);
    const linkElement = screen.queryByTestId("popup");
    waitFor(()=>expect(getByTestId(linkElement)).toBeInTheDocument());
});

test('Sidebar Check', () => {
    render(<MemoryRouter><SideBar list={[]}/></MemoryRouter>);
    const linkElement = screen.queryByTestId("sidebar");
    waitFor(()=>expect(getByTestId(linkElement)).toBeInTheDocument());
});

test('Form Check', () => {
    render(<MemoryRouter><Form /></MemoryRouter>);
    const linkElement = screen.queryByTestId("form");
    waitFor(()=>expect(getByTestId(linkElement)).toBeInTheDocument());
});

test('Table Check', () => {
    render(<MemoryRouter><UseTable header={[]}/></MemoryRouter>);
    const linkElement = screen.queryByTestId("table");
    waitFor(()=>expect(getByTestId(linkElement)).toBeInTheDocument());
});

