import {React , useState} from 'react';
import InnerSideBar from './InnerSideBar';
import Introduction from './CppDocument/Introduction';
import GettingStarted from './CppDocument/GettingStarted';
import BasicConcepts from './CppDocument/BasicConcepts';
import ControlStructures from './CppDocument/ControlStructures';
import OOPConcepts from './CppDocument/OOPConcepts';
import IntermediateConcepts from './CppDocument/IntermediateConcepts';
import STLConcepts from './CppDocument/STLConcepts';
import ExceptionHandlingConcepts from './CppDocument/ExceptionHandlingConcepts';
import { Route, Routes, useNavigate, Navigate, Router } from 'react-router-dom';

function DocumentationPage() {
    const [active, setActive] = useState('introduction');
    const navigate = useNavigate();
    
    // Ensure path has a forward slash at the start for absolute routing
    const handleClick = (option,path) => {
        setActive(option);
        navigate(path);
    };

    return (
        <div className='width height flex'>
            {/* Side bar */}
            <div className='w-[25%] h-full flex flex-col gap-2 items-center pt-2 shadow-md'>
                
                <InnerSideBar  data={"Introduction"} isActive={active === 'introduction'}  onClick={() => handleClick('introduction','introduction')} />
                <InnerSideBar data={"Getting Started"} isActive={active === 'getting-started'} onClick={() => handleClick('getting-started', 'getting-started')} />
                <InnerSideBar data={"Basic Concepts"} isActive={active === 'basic-concepts'} onClick={() => handleClick('basic-concepts','basic-concepts')} />
                <InnerSideBar data={"Control Structures"} isActive={active === 'control-structures'} onClick={() => handleClick('control-structures','control-structures')} />
                <InnerSideBar data={"Intermediate Concepts"} isActive={active === 'intermediate-concepts'} onClick={() => handleClick('intermediate-concepts' ,'intermediate-concepts')} />
                <InnerSideBar data={"Standard Template Library (STL)"} isActive={active === 'stl-concepts'} onClick={() => handleClick('stl-concepts','stl-concepts')} />
                <InnerSideBar data={"Object-Oriented Programming (OOP)"} isActive={active === 'oops-concepts'} onClick={() => handleClick('oops-concepts','oops-concepts')} />
                <InnerSideBar data={"Exception Handling"} isActive={active === 'exceptionHandling-concepts'} onClick={() => handleClick('exceptionHandling-concepts','exceptionHandling-concepts')} />
                <InnerSideBar data={"Practical Applications"} isActive={active === 'practical-applications'} onClick={() => handleClick('practical-applications' ,'practical-applications')} />

            </div>

            {/* Main content */}
            <div className=' h-full w-[75%] overflow-x-auto'>
               
                <Routes>
                    <Route path="/" element={<Introduction />} />
                    <Route path="introduction" element={<Introduction />} />
                    <Route path="getting-started" element={<GettingStarted />} />
                    <Route path="basic-concepts" element={<BasicConcepts />} />
                    <Route path="control-structures" element={<ControlStructures />} />
                    <Route path="intermediate-concepts" element={<IntermediateConcepts />} />
                    <Route path="oops-concepts" element={<OOPConcepts />} />
                    <Route path="stl-concepts" element={<STLConcepts />} />
                    <Route path="exceptionHandling-concepts" element={<ExceptionHandlingConcepts />} />
                </Routes>
            </div>
        </div>
    );
}

export default DocumentationPage;
