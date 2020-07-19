import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSchools } from '../../actions/schools';

// Importing Components
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import AllSchools from './allSchools/AllSchools';
import AllTeachers from './allTeachers/AllTeachers';
import UpdatePersonalDetails from './updatePersonalDetails/UpdatePersonalDetails';
import UpdatePassword from './updatePassword/UpdatePassword';
import ManageSchool from './manageSchool/ManageSchool';
import AddSchool from './manageSchool/AddSchool';
import EditSchool from './manageSchool/EditSchool';
import ManageTeachers from './manageTeachers/ManageTeachers';
import AddTeacher from './manageTeachers/AddTeacher';
import EditTeacher from './manageTeachers/EditTeacher';

const Dashboard = ({ getSchools }) => {
    useEffect(() => {
        getSchools(1);
    }, [getSchools]);

    return (
        <div className="d-flex" id="wrapper">
            <Sidebar />

            <div id="page-content-wrapper">
                <Navbar />

                <Route path="/dashboard/allschools" component={AllSchools} />
                <Route path="/dashboard/allteachers" component={AllTeachers} />
                <Route
                    path="/dashboard/updatePersonalDetails"
                    component={UpdatePersonalDetails}
                />
                <Route
                    path="/dashboard/updatePassword"
                    component={UpdatePassword}
                />
                <Route
                    exact
                    path="/dashboard/school"
                    component={ManageSchool}
                />
                <Route path="/dashboard/school/add" component={AddSchool} />
                <Route path="/dashboard/school/edit" component={EditSchool} />
                <Route
                    exact
                    path="/dashboard/teachers"
                    component={ManageTeachers}
                />
                <Route path="/dashboard/teachers/add" component={AddTeacher} />
                <Route
                    path="/dashboard/teachers/edit/:teacherId"
                    component={EditTeacher}
                />
            </div>
        </div>
    );
};

Dashboard.propTypes = {
    getSchools: PropTypes.func.isRequired,
};

export default connect(null, { getSchools })(Dashboard);
