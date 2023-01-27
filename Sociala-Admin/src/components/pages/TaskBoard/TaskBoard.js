import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";

import AllData from "../../../Hooks/ProfileHook";
import { getUsers,getAdminProfile } from "../../../Services/AdminService/AdminService";
import Header from "../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";
import NotificationModel from "../../shared/NotificationModel/NotificationModel";
import RightMenu from "../../shared/RightMenu/RightMenu";
import ChooseLayout from "../../shared/ChooseLayout/ChooseLayout";


const TaskBoard = () => {
  return (
    <>

    {/* <!-- Begin page --> */}
    <div id="layout-wrapper">

    <Header />

<NotificationModel />
<RightMenu />


        {/* <!-- ============================================================== -->
        <!-- Start right Content here -->
        <!-- ============================================================== --> */}
        <div className="main-content">

            <div className="page-content">
                <div className="container-fluid">

                    {/* <!-- start page title --> */}
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0">Kanban Board</h4>

                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><a href="#">Tasks</a></li>
                                        <li className="breadcrumb-item active">Kanban Board</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <!-- end page title --> */}

                    <div className="card">
                        <div className="card-body">
                            <div className="row g-2">
                                <div className="col-lg-auto">
                                    <div className="hstack gap-2">
                                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createboardModal"><i className="ri-add-line align-bottom me-1"></i> Create Board</button>
                                    </div>
                                </div>
                                {/* <!--end col--> */}
                                <div className="col-lg-3 col-auto">
                                    <div className="search-box">
                                        <input type="text" className="form-control search" id="search-task-options" placeholder="Search for project, tasks..." />
                                        <i className="ri-search-line search-icon"></i>
                                    </div>
                                </div>
                                <div className="col-auto ms-sm-auto">
                                    <div className="avatar-group" id="newMembar">
                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Nancy">
                                            <img src="/assets/images/users/avatar-5.jpg" alt="" className="rounded-circle avatar-xs" />
                                        </a>
                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Frank">
                                            <img src="/assets/images/users/avatar-3.jpg" alt="" className="rounded-circle avatar-xs" />
                                        </a>
                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Tonya">
                                            <img src="/assets/images/users/avatar-10.jpg" alt="" className="rounded-circle avatar-xs" />
                                        </a>
                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Thomas">
                                            <img src="/assets/images/users/avatar-8.jpg" alt="" className="rounded-circle avatar-xs" />
                                        </a>
                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Herbert">
                                            <img src="/assets/images/users/avatar-2.jpg" alt="" className="rounded-circle avatar-xs" />
                                        </a>
                                        <a href="#addmemberModal" data-bs-toggle="modal" className="avatar-group-item">
                                            <div className="avatar-xs">
                                                <div className="avatar-title rounded-circle">
                                                    +
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/* <!--end col--> */}
                            </div>
                            {/* <!--end row--> */}
                        </div>
                        {/* <!--end card-body--> */}
                    </div>
                    {/* <!--end card--> */}

                    <div className="tasks-board mb-3" id="kanbanboard">
                        <div className="tasks-list">
                            <div className="d-flex mb-3">
                                <div className="flex-grow-1">
                                    <h6 className="fs-14 text-uppercase fw-semibold mb-0">Unassigned <small className="badge bg-danger align-bottom ms-1 totaltask-badge">2</small></h6>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="dropdown card-header-dropdown">
                                        <a className="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="fw-medium text-muted fs-13">Priority<i className="mdi mdi-chevron-down ms-1"></i></span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Priority</a>
                                            <a className="dropdown-item" href="#">Date Added</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-simplebar className="tasks-wrapper px-3 mx-n3">
                                <div id="unassigned-task" className="tasks">
                                    <div className="card tasks-box">
                                        <div className="card-body">
                                            <div className="d-flex mb-2">
                                                <h6 className="fs-16 mb-0 flex-grow-1 text-truncate task-title"><a href="apps-tasks-details.html" className="link-dark d-block">Profile Page
                                                        Structure</a></h6>
                                                <div className="dropdown">
                                                    <a href="#;" className="text-muted" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="false"><i className="ri-more-fill"></i></a>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                                        <li><a className="dropdown-item" href="apps-tasks-details.html"><i className="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                                View</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="ri-edit-2-line align-bottom me-2 text-muted"></i>
                                                                Edit</a></li>
                                                        <li><a className="dropdown-item" data-bs-toggle="modal" href="#deleteRecordModal"><i className="ri-delete-bin-5-line align-bottom me-2 text-muted"></i>
                                                                Delete</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p className="text-muted">Profile Page means a web page accessible to the public
                                                or to guests.</p>
                                            <div className="mb-3">
                                                <div className="d-flex mb-1">
                                                    <div className="flex-grow-1">
                                                        <h6 className="text-muted mb-0"><span className="text-secondary">15%</span> of 100%</h6>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <span className="text-muted">03 Jan, 2022</span>
                                                    </div>
                                                </div>
                                                <div className="progress rounded-3 progress-sm">
                                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '15%'}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <span className="badge badge-soft-primary">Admin</span>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <div className="avatar-group">
                                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Alexis">
                                                            <img src="/assets/images/users/avatar-6.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Nancy">
                                                            <img src="/assets/images/users/avatar-5.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer border-top-dashed">
                                            <div className="d-flex">
                                                <div className="flex-grow-1">
                                                    <h6 className="text-muted mb-0">#VL2436</h6>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <ul className="link-inline mb-0">
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-eye-line align-bottom"></i> 04</a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-question-answer-line align-bottom"></i>
                                                                19</a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-attachment-2 align-bottom"></i> 02</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--end card-body--> */}
                                    </div>
                                    {/* <!--end card--> */}
                                    <div className="card tasks-box">
                                        <div className="card-body">
                                            <div className="d-flex mb-2">
                                                <div className="flex-grow-1">
                                                    <h6 className="fs-16 mb-0 text-truncate task-title"><a href="apps-tasks-details.html" className="link-dark d-block">Velzon -
                                                            Admin Layout Design</a></h6>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <a href="#;" className="text-muted" id="dropdownMenuLink12" data-bs-toggle="dropdown" aria-expanded="false"><i className="ri-more-fill"></i></a>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink12">
                                                        <li><a className="dropdown-item" href="apps-tasks-details.html"><i className="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                                View</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="ri-edit-2-line align-bottom me-2 text-muted"></i>
                                                                Edit</a></li>
                                                        <li><a className="dropdown-item" data-bs-toggle="modal" href="#deleteRecordModal"><i className="ri-delete-bin-5-line align-bottom me-2 text-muted"></i>
                                                                Delete</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p className="text-muted">The dashboard is the front page of the Administration
                                                UI.</p>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <span className="badge badge-soft-primary">Layout</span>
                                                    <span className="badge badge-soft-primary">Admin</span>
                                                    <span className="badge badge-soft-primary">Dashboard</span>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <div className="avatar-group">
                                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Michael">
                                                            <img src="/assets/images/users/avatar-7.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Alexis">
                                                            <img src="/assets/images/users/avatar-6.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Anna">
                                                            <img src="/assets/images/users/avatar-1.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--end card-body--> */}
                                        <div className="card-footer border-top-dashed">
                                            <div className="d-flex">
                                                <div className="flex-grow-1">
                                                    <span className="text-muted"><i className="ri-time-line align-bottom"></i>
                                                        07 Jan, 2022</span>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <ul className="link-inline mb-0">
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-eye-line align-bottom"></i> 14</a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-question-answer-line align-bottom"></i>
                                                                32</a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-attachment-2 align-bottom"></i> 05</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--end card--> */}
                                </div>
                                {/* <!--end tasks--> */}
                            </div>
                            <div className="my-3">
                                <button className="btn btn-soft-info w-100" data-bs-toggle="modal" data-bs-target="#creatertaskModal">Add More</button>
                            </div>
                        </div>
                        {/* <!--end tasks-list--> */}
                        <div className="tasks-list">
                            <div className="d-flex mb-3">
                                <div className="flex-grow-1">
                                    <h6 className="fs-14 text-uppercase fw-semibold mb-0">To Do <small className="badge bg-secondary align-bottom ms-1 totaltask-badge">2</small></h6>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="dropdown card-header-dropdown">
                                        <a className="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="fw-medium text-muted fs-13">Priority<i className="mdi mdi-chevron-down ms-1"></i></span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Priority</a>
                                            <a className="dropdown-item" href="#">Date Added</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-simplebar className="tasks-wrapper px-3 mx-n3">
                                <div id="todo-task" className="tasks">
                                    <div className="card tasks-box">
                                        <div className="card-body">
                                            <div className="d-flex mb-2">
                                                <div className="flex-grow-1">
                                                    <h6 className="fs-16 mb-0 text-truncate task-title"><a href="apps-tasks-details.html" className="link-dark d-block">Admin
                                                            Layout Design</a></h6>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <a href="#;" className="text-muted" id="dropdownMenuLink3" data-bs-toggle="dropdown" aria-expanded="false"><i className="ri-more-fill"></i></a>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink3">
                                                        <li><a className="dropdown-item" href="apps-tasks-details.html"><i className="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                                View</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="ri-edit-2-line align-bottom me-2 text-muted"></i>
                                                                Edit</a></li>
                                                        <li><a className="dropdown-item" data-bs-toggle="modal" href="#deleteRecordModal"><i className="ri-delete-bin-5-line align-bottom me-2 text-muted"></i>
                                                                Delete</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p className="text-muted">Landing page template with clean, minimal and modern
                                                design.</p>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <span className="badge badge-soft-primary">Design</span>
                                                    <span className="badge badge-soft-primary">Website</span>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <div className="avatar-group">
                                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Tonya">
                                                            <img src="/assets/images/users/avatar-10.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Frank">
                                                            <img src="/assets/images/users/avatar-3.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Herbert">
                                                            <img src="/assets/images/users/avatar-2.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--end card-body--> */}
                                        <div className="card-footer border-top-dashed">
                                            <div className="d-flex">
                                                <div className="flex-grow-1">
                                                    <span className="text-muted"><i className="ri-time-line align-bottom"></i>
                                                        07 Jan, 2022</span>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <ul className="link-inline mb-0">
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-eye-line align-bottom"></i> 13</a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-question-answer-line align-bottom"></i>
                                                                52</a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-attachment-2 align-bottom"></i> 17</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--end card--> */}
                                    <div className="card tasks-box">
                                        <div className="card-body">
                                            <div className="d-flex mb-2">
                                                <div className="flex-grow-1">
                                                    <h6 className="fs-16 mb-0 text-truncate task-title"><a href="apps-tasks-details.html" className="link-dark d-block">Marketing &
                                                            Sales</a></h6>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <a href="#;" className="text-muted" id="dropdownMenuLink4" data-bs-toggle="dropdown" aria-expanded="false"><i className="ri-more-fill"></i></a>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink4">
                                                        <li><a className="dropdown-item" href="apps-tasks-details.html"><i className="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                                View</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="ri-edit-2-line align-bottom me-2 text-muted"></i>
                                                                Edit</a></li>
                                                        <li><a className="dropdown-item" data-bs-toggle="modal" href="#deleteRecordModal"><i className="ri-delete-bin-5-line align-bottom me-2 text-muted"></i>
                                                                Delete</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p className="text-muted">Sales and marketing are two business functions within
                                                an organization.</p>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <span className="badge badge-soft-primary">Marketing</span>
                                                    <span className="badge badge-soft-primary">Business</span>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <div className="avatar-group">
                                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Donald">
                                                            <img src="/assets/images/users/avatar-9.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Thomas">
                                                            <img src="/assets/images/users/avatar-8.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--end card-body--> */}
                                        <div className="card-footer border-top-dashed">
                                            <div className="d-flex">
                                                <div className="flex-grow-1">
                                                    <span className="text-muted"><i className="ri-time-line align-bottom"></i>
                                                        27 Dec, 2021</span>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <ul className="link-inline mb-0">
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-eye-line align-bottom"></i> 24</a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-question-answer-line align-bottom"></i>
                                                                10</a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-attachment-2 align-bottom"></i> 10</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--end card--> */}
                                </div>
                            </div>
                            <div className="my-3">
                                <button className="btn btn-soft-info w-100" data-bs-toggle="modal" data-bs-target="#creatertaskModal">Add More</button>
                            </div>
                        </div>
                        {/* <!--end tasks-list--> */}
                        <div className="tasks-list">
                            <div className="d-flex mb-3">
                                <div className="flex-grow-1">
                                    <h6 className="fs-14 text-uppercase fw-semibold mb-0">Inprogress <small className="badge bg-warning align-bottom ms-1 totaltask-badge">2</small></h6>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="dropdown card-header-dropdown">
                                        <a className="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="fw-medium text-muted fs-13">Priority<i className="mdi mdi-chevron-down ms-1"></i></span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Priority</a>
                                            <a className="dropdown-item" href="#">Date Added</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-simplebar className="tasks-wrapper px-3 mx-n3">
                                <div id="inprogress-task" className="tasks">
                                    <div className="card tasks-box">
                                        <div className="card-body">
                                            <div className="d-flex mb-2">
                                                <a href="#" className="text-muted fw-medium fs-14 flex-grow-1">#VL2457</a>
                                                <div className="dropdown">
                                                    <a href="#;" className="text-muted" id="dropdownMenuLink5" data-bs-toggle="dropdown" aria-expanded="false"><i className="ri-more-fill"></i></a>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink5">
                                                        <li><a className="dropdown-item" href="apps-tasks-details.html"><i className="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                                View</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="ri-edit-2-line align-bottom me-2 text-muted"></i>
                                                                Edit</a></li>
                                                        <li><a className="dropdown-item" data-bs-toggle="modal" href="#deleteRecordModal"><i className="ri-delete-bin-5-line align-bottom me-2 text-muted"></i>
                                                                Delete</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <h6 className="fs-16 text-truncate task-title"><a href="apps-tasks-details.html" className="link-dark d-block">Brand Logo Design</a></h6>
                                            <p className="text-muted">BrandCrowd's brand logo maker allows you to generate
                                                and customize stand-out brand logos in minutes.</p>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <span className="badge badge-soft-primary">Logo</span>
                                                    <span className="badge badge-soft-primary">Design</span>
                                                    <span className="badge badge-soft-primary">UI/UX</span>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <div className="avatar-group">
                                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Nancy">
                                                            <img src="/assets/images/users/avatar-5.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Michael">
                                                            <img src="/assets/images/users/avatar-7.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Alexis">
                                                            <img src="/assets/images/users/avatar-6.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer border-top-dashed">
                                            <div className="d-flex">
                                                <div className="flex-grow-1">
                                                    <span className="text-muted"><i className="ri-time-line align-bottom"></i>
                                                        22 Dec, 2021</span>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <ul className="link-inline mb-0">
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-eye-line align-bottom"></i> 24</a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-question-answer-line align-bottom"></i>
                                                                10</a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-attachment-2 align-bottom"></i> 10</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--end card-body--> */}
                                        <div className="progress progress-sm">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '55%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    {/* <!--end card--> */}
                                    <div className="card tasks-box">
                                        <div className="card-body">
                                            <div className="d-flex mb-2">
                                                <a href="#" className="text-muted fw-medium fs-14 flex-grow-1">#VL2743</a>
                                                <div className="dropdown">
                                                    <a href="#;" className="text-muted" id="dropdownMenuLink6" data-bs-toggle="dropdown" aria-expanded="false"><i className="ri-more-fill"></i></a>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink6">
                                                        <li><a className="dropdown-item" href="apps-tasks-details.html"><i className="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                                View</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="ri-edit-2-line align-bottom me-2 text-muted"></i>
                                                                Edit</a></li>
                                                        <li><a className="dropdown-item" data-bs-toggle="modal" href="#deleteRecordModal"><i className="ri-delete-bin-5-line align-bottom me-2 text-muted"></i>
                                                                Delete</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <h6 className="fs-16 text-truncate task-title"><a href="apps-tasks-details.html" className="link-dark d-block">Change Old App Icon</a></h6>
                                            <p className="text-muted">Change app icons on Android: How do you change the
                                                look of your apps.</p>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <span className="badge badge-soft-primary">Design</span>
                                                    <span className="badge badge-soft-primary">Website</span>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <div className="avatar-group">
                                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Tonya">
                                                            <img src="/assets/images/users/avatar-10.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Donald">
                                                            <img src="/assets/images/users/avatar-9.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Nancy">
                                                            <img src="/assets/images/users/avatar-5.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer border-top-dashed">
                                            <div className="d-flex">
                                                <div className="flex-grow-1">
                                                    <span className="text-muted"><i className="ri-time-line align-bottom"></i>
                                                        24 Oct, 2021</span>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <ul className="link-inline mb-0">
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-eye-line align-bottom"></i> 64</a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-question-answer-line align-bottom"></i>
                                                                35</a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-attachment-2 align-bottom"></i> 23</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--end card-body--> */}
                                        <div className="progress progress-sm">
                                            <div className="progress-bar bg-primary" role="progressbar" style={{width: '0%'}}aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    {/* <!--end card--> */}
                                </div>
                            </div>
                            <div className="my-3">
                                <button className="btn btn-soft-info w-100" data-bs-toggle="modal" data-bs-target="#creatertaskModal">Add More</button>
                            </div>
                        </div>
                        {/* <!--end tasks-list--> */}
                        <div className="tasks-list">
                            <div className="d-flex mb-3">
                                <div className="flex-grow-1">
                                    <h6 className="fs-14 text-uppercase fw-semibold mb-0">In Reviews <small className="badge bg-info align-bottom ms-1 totaltask-badge">3</small></h6>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="dropdown card-header-dropdown">
                                        <a className="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="fw-medium text-muted fs-13">Priority<i className="mdi mdi-chevron-down ms-1"></i></span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Priority</a>
                                            <a className="dropdown-item" href="#">Date Added</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-simplebar className="tasks-wrapper px-3 mx-n3">
                                <div id="reviews-task" className="tasks">
                                    <div className="card tasks-box">
                                        <div className="card-body">
                                            <div className="d-flex mb-2">
                                                <a href="#" className="text-muted fw-medium fs-14 flex-grow-1">#VL2453</a>
                                                <div className="dropdown">
                                                    <a href="#;" className="text-muted" id="dropdownMenuLink7" data-bs-toggle="dropdown" aria-expanded="false"><i className="ri-more-fill"></i></a>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink7">
                                                        <li><a className="dropdown-item" href="apps-tasks-details.html"><i className="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                                View</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="ri-edit-2-line align-bottom me-2 text-muted"></i>
                                                                Edit</a></li>
                                                        <li><a className="dropdown-item" data-bs-toggle="modal" href="#deleteRecordModal"><i className="ri-delete-bin-5-line align-bottom me-2 text-muted"></i>
                                                                Delete</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <h6 className="fs-16 text-truncate task-title"><a href="apps-tasks-details.html" className="link-dark d-block">Create Product Animations</a></h6>
                                            <div className="tasks-img rounded" style={{backgroundImage: 'url(/assets/images/small/img-7.jpg)'}}></div>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <span className="badge badge-soft-primary">Ecommerce</span>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <div className="avatar-group">
                                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Anna">
                                                            <img src="/assets/images/users/avatar-1.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer border-top-dashed">
                                            <div className="d-flex">
                                                <div className="flex-grow-1">
                                                    <span className="text-muted"><i className="ri-time-line align-bottom"></i>
                                                        16 Nov, 2021</span>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <ul className="link-inline mb-0">
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-eye-line align-bottom"></i> 08</a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-question-answer-line align-bottom"></i>
                                                                54</a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-attachment-2 align-bottom"></i> 28</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--end card-body--> */}
                                        <div className="progress progress-sm">
                                            <div className="progress-bar bg-success" role="progressbar" style={{width: '100%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    {/* <!--end card--> */}
                                    <div className="card tasks-box">
                                        <div className="card-body">
                                            <div className="d-flex mb-2">
                                                <a href="#" className="text-muted fw-medium fs-14 flex-grow-1">#VL2340</a>
                                                <div className="dropdown">
                                                    <a href="#;" className="text-muted" id="dropdownMenuLink8" data-bs-toggle="dropdown" aria-expanded="false"><i className="ri-more-fill"></i></a>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink8">
                                                        <li><a className="dropdown-item" href="apps-tasks-details.html"><i className="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                                View</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="ri-edit-2-line align-bottom me-2 text-muted"></i>
                                                                Edit</a></li>
                                                        <li><a className="dropdown-item" data-bs-toggle="modal" href="#deleteRecordModal"><i className="ri-delete-bin-5-line align-bottom me-2 text-muted"></i>
                                                                Delete</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <h6 className="fs-16 text-truncate task-title"><a href="apps-tasks-details.html" className="link-dark d-block">Product Features Analysis</a></h6>
                                            <p className="text-muted">An essential part of strategic planning is running a
                                                product feature analysis.</p>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <span className="badge badge-soft-primary">Product</span>
                                                    <span className="badge badge-soft-primary">Analysis</span>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <div className="avatar-group">
                                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Nancy">
                                                            <img src="/assets/images/users/avatar-5.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Alexis">
                                                            <img src="/assets/images/users/avatar-6.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--end card-body--> */}
                                        <div className="card-footer border-top-dashed">
                                            <div className="d-flex">
                                                <div className="flex-grow-1">
                                                    <span className="text-muted"><i className="ri-time-line align-bottom"></i>
                                                        05 Jan, 2022</span>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <ul className="link-inline mb-0">
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-eye-line align-bottom"></i> 14</a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-question-answer-line align-bottom"></i>
                                                                31</a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-attachment-2 align-bottom"></i> 07</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--end card-body--> */}
                                        <div className="progress progress-sm">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '67%'}} aria-valuenow="67" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    {/* <!--end card--> */}
                                    <div className="card tasks-box">
                                        <div className="card-body">
                                            <div className="d-flex mb-2">
                                                <a href="#" className="text-muted fw-medium fs-14 flex-grow-1">#VL2462</a>
                                                <div className="dropdown">
                                                    <a href="#;" className="text-muted" id="dropdownMenuLink9" data-bs-toggle="dropdown" aria-expanded="false"><i className="ri-more-fill"></i></a>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink9">
                                                        <li><a className="dropdown-item" href="apps-tasks-details.html"><i className="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                                View</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="ri-edit-2-line align-bottom me-2 text-muted"></i>
                                                                Edit</a></li>
                                                        <li><a className="dropdown-item" data-bs-toggle="modal" href="#deleteRecordModal"><i className="ri-delete-bin-5-line align-bottom me-2 text-muted"></i>
                                                                Delete</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <h6 className="fs-16 text-truncate task-title"><a href="apps-tasks-details.html" className="link-dark d-block">Create a Graph of Sketch</a></h6>
                                            <p className="text-muted">To make a pie chart with equal slices create a perfect
                                                circle by selecting an Oval Tool.</p>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <span className="badge badge-soft-primary">Sketch</span>
                                                    <span className="badge badge-soft-primary">Marketing</span>
                                                    <span className="badge badge-soft-primary">Design</span>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <div className="avatar-group">
                                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Alexis">
                                                            <img src="/assets/images/users/avatar-4.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Thomas">
                                                            <img src="/assets/images/users/avatar-8.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Herbert">
                                                            <img src="/assets/images/users/avatar-2.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Anna">
                                                            <img src="/assets/images/users/avatar-1.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer border-top-dashed">
                                            <div className="d-flex">
                                                <div className="flex-grow-1">
                                                    <span className="text-muted"><i className="ri-time-line align-bottom"></i>
                                                        05 Nov, 2021</span>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <ul className="link-inline mb-0">
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-eye-line align-bottom"></i> 12</a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-question-answer-line align-bottom"></i>
                                                                74</a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-attachment-2 align-bottom"></i> 37</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--end card-body--> */}
                                        <div className="progress progress-sm">
                                            <div className="progress-bar bg-primary" role="progressbar" style={{width: '0%'}}aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    {/* <!--end card--> */}
                                </div>
                            </div>
                            <div className="my-3">
                                <button className="btn btn-soft-info w-100" data-bs-toggle="modal" data-bs-target="#creatertaskModal">Add More</button>
                            </div>
                        </div>
                        {/* <!--end tasks-list--> */}
                        <div className="tasks-list">
                            <div className="d-flex mb-3">
                                <div className="flex-grow-1">
                                    <h6 className="fs-14 text-uppercase fw-semibold mb-0">Completed <small className="badge bg-success align-bottom ms-1 totaltask-badge">1</small></h6>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="dropdown card-header-dropdown">
                                        <a className="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="fw-medium text-muted fs-13">Priority<i className="mdi mdi-chevron-down ms-1"></i></span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Priority</a>
                                            <a className="dropdown-item" href="#">Date Added</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-simplebar className="tasks-wrapper px-3 mx-n3">
                                <div id="completed-task" className="tasks">
                                    <div className="card tasks-box">
                                        <div className="card-body">
                                            <div className="d-flex mb-2">
                                                <h6 className="fs-16 mb-0 flex-grow-1 text-truncate task-title"><a href="apps-tasks-details.html" className="link-dark d-block">Create a Blog
                                                        Template UI</a></h6>
                                                <div className="dropdown">
                                                    <a href="#;" className="text-muted" id="dropdownMenuLink10" data-bs-toggle="dropdown" aria-expanded="false"><i className="ri-more-fill"></i></a>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink10">
                                                        <li><a className="dropdown-item" href="apps-tasks-details.html"><i className="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                                View</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="ri-edit-2-line align-bottom me-2 text-muted"></i>
                                                                Edit</a></li>
                                                        <li><a className="dropdown-item" data-bs-toggle="modal" href="#deleteRecordModal"><i className="ri-delete-bin-5-line align-bottom me-2 text-muted"></i>
                                                                Delete</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p className="text-muted">Landing page template with clean, minimal and modern
                                                design.</p>
                                            <div className="mb-3">
                                                <div className="d-flex mb-1">
                                                    <div className="flex-grow-1">
                                                        <h6 className="text-muted mb-0"><span className="text-info">35%</span>
                                                            of 100%</h6>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <span className="text-muted fw-medium">3 Day</span>
                                                    </div>
                                                </div>
                                                <div className="progress rounded-3 progress-sm">
                                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '35%'}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <span className="badge badge-soft-primary">Design</span>
                                                    <span className="badge badge-soft-primary">Website</span>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <div className="avatar-group">
                                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Nancy">
                                                            <img src="/assets/images/users/avatar-8.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Frank">
                                                            <img src="/assets/images/users/avatar-7.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Tonya">
                                                            <img src="/assets/images/users/avatar-6.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer border-top-dashed">
                                            <div className="d-flex">
                                                <div className="flex-grow-1">
                                                    <h6 className="text-muted mb-0">#VL2451</h6>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <ul className="link-inline mb-0">
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-eye-line align-bottom"></i> 24</a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-question-answer-line align-bottom"></i>
                                                                10</a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-attachment-2 align-bottom"></i> 10</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--end card-body--> */}
                                    </div>
                                    {/* <!--end card--> */}
                                </div>
                            </div>
                            <div className="my-3">
                                <button className="btn btn-soft-info w-100" data-bs-toggle="modal" data-bs-target="#creatertaskModal">Add More</button>
                            </div>
                        </div>
                        {/* <!--end tasks-list--> */}
                        <div className="tasks-list">
                            <div className="d-flex mb-3">
                                <div className="flex-grow-1">
                                    <h6 className="fs-14 text-uppercase fw-semibold mb-0">new <small className="badge bg-success align-bottom ms-1 totaltask-badge">1</small></h6>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="dropdown card-header-dropdown">
                                        <a className="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="fw-medium text-muted fs-13">Priority<i className="mdi mdi-chevron-down ms-1"></i></span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Priority</a>
                                            <a className="dropdown-item" href="#">Date Added</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-simplebar className="tasks-wrapper px-3 mx-n3">
                                <div id="new-task" className="tasks">
                                    <div className="card tasks-box">
                                        <div className="card-body">
                                            <div className="d-flex mb-2">
                                                <a href="#" className="text-muted fw-medium fs-14 flex-grow-1">#VL5287</a>
                                                <div className="dropdown">
                                                    <a href="#;" className="text-muted" id="dropdownMenuLink2" data-bs-toggle="dropdown" aria-expanded="false"><i className="ri-more-fill"></i></a>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink2">
                                                        <li><a className="dropdown-item" href="apps-tasks-details.html"><i className="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                                View</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="ri-edit-2-line align-bottom me-2 text-muted"></i>
                                                                Edit</a></li>
                                                        <li><a className="dropdown-item" data-bs-toggle="modal" href="#deleteRecordModal"><i className="ri-delete-bin-5-line align-bottom me-2 text-muted"></i>
                                                                Delete</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <h6 className="fs-16 text-truncate task-title"><a href="apps-tasks-details.html" className="link-dark d-block">Banner Design for FB & Twitter</a></h6>
                                            <div className="tasks-img rounded" style={{backgroundImage: 'url(/assets/images/small/img-4.jpg)'}}></div>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <span className="badge badge-soft-primary">UI/UX</span>
                                                    <span className="badge badge-soft-primary">Graphic</span>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <div className="avatar-group">
                                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Frank">
                                                            <img src="/assets/images/users/avatar-3.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Herbert">
                                                            <img src="/assets/images/users/avatar-2.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer border-top-dashed">
                                            <div className="d-flex">
                                                <div className="flex-grow-1">
                                                    <span className="text-muted"><i className="ri-time-line align-bottom"></i>
                                                        07 Jan, 2022</span>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <ul className="link-inline mb-0">
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-eye-line align-bottom"></i> 11</a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-question-answer-line align-bottom"></i>
                                                                26</a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-attachment-2 align-bottom"></i> 30</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--end card-body--> */}
                                        <div className="progress progress-sm">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '55%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    {/* <!--end card--> */}
                                </div>
                            </div>
                            <div className="my-3">
                                <button className="btn btn-soft-info w-100" data-bs-toggle="modal" data-bs-target="#creatertaskModal">Add More</button>
                            </div>
                        </div>
                        {/* <!--end tasks-list--> */}
                    </div>
                    {/* <!--end task-board--> */}

                    <div className="modal fade" id="addmemberModal" tabIndex="-1" aria-labelledby="addmemberModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content border-0">
                                <div className="modal-header p-3 bg-soft-warning">
                                    <h5 className="modal-title" id="addmemberModalLabel">Add Member</h5>
                                    <button type="button" className="btn-close" id="btn-close-member" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="row g-3">
                                            <div className="col-lg-12">
                                                <label htmlFor="submissionidInput" className="form-label">Submission ID</label>
                                                <input type="number" className="form-control" id="submissionidInput" placeholder="Submission ID" />
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-12">
                                                <label htmlFor="profileimgInput" className="form-label">Profile Images</label>
                                                <input className="form-control" type="file" id="profileimgInput" />
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-6">
                                                <label htmlFor="firstnameInput" className="form-label">First Name</label>
                                                <input type="text" className="form-control" id="firstnameInput" placeholder="Enter firstname" />
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-6">
                                                <label htmlFor="lastnameInput" className="form-label">Last Name</label>
                                                <input type="text" className="form-control" id="lastnameInput" placeholder="Enter lastname" />
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-12">
                                                <label htmlFor="designationInput" className="form-label">Designation</label>
                                                <input type="text" className="form-control" id="designationInput" placeholder="Designation" />
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-12">
                                                <label htmlFor="titleInput" className="form-label">Title</label>
                                                <input type="text" className="form-control" id="titleInput" placeholder="Title" />
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-6">
                                                <label htmlFor="numberInput" className="form-label">Phone Number</label>
                                                <input type="text" className="form-control" id="numberInput" placeholder="Phone number" />
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-6">
                                                <label htmlFor="joiningdateInput" className="form-label">Joining Date</label>
                                                <input type="text" className="form-control" id="joiningdateInput" data-provider="flatpickr" placeholder="Select date" />
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-12">
                                                <label htmlFor="emailInput" className="form-label">Email ID</label>
                                                <input type="email" className="form-control" id="emailInput" placeholder="Email" />
                                            </div>
                                            {/* <!--end col--> */}
                                        </div>
                                        {/* <!--end row--> */}
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-light" data-bs-dismiss="modal"><i className="ri-close-line align-bottom me-1"></i> Close</button>
                                    <button type="button" className="btn btn-success" id="addMember">Add Member</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--end add member modal--> */}

                    <div className="modal fade" id="createboardModal" tabIndex="-1" aria-labelledby="createboardModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content border-0">
                                <div className="modal-header p-3 bg-soft-info">
                                    <h5 className="modal-title" id="createboardModalLabel">Add Board</h5>
                                    <button type="button" className="btn-close" id="addBoardBtn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <label htmlFor="boardName" className="form-label">Board Name</label>
                                                <input type="text" className="form-control" id="boardName" placeholder="Enter board name" />
                                            </div>
                                            <div className="mt-4">
                                                <div className="hstack gap-2 justify-content-end">
                                                    <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-success" id="addNewBoard">Add
                                                        Board</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--end add board modal--> */}

                    <div className="modal fade" id="creatertaskModal" tabIndex="-1" aria-labelledby="creatertaskModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-lg">
                            <div className="modal-content border-0">
                                <div className="modal-header p-3 bg-soft-info">
                                    <h5 className="modal-title" id="creatertaskModalLabel">Create New Task</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form action="#">
                                        <div className="row g-3">
                                            <div className="col-lg-12">
                                                <label htmlFor="projectName" className="form-label">Project Name</label>
                                                <input type="text" className="form-control" id="projectName" placeholder="Enter project name" />
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-12">
                                                <label htmlFor="sub-tasks" className="form-label">Task Title</label>
                                                <input type="text" className="form-control" id="sub-tasks" placeholder="Task title" />
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-12">
                                                <label htmlFor="task-description" className="form-label">Task
                                                    Description</label>
                                                <textarea className="form-control" id="task-description" rows="3" placeholder="Task description"></textarea>
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-12">
                                                <label htmlFor="formFile" className="form-label">Tasks Images</label>
                                                <input className="form-control" type="file" id="formFile" />
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-12">
                                                <label htmlFor="tasks-progress" className="form-label">Add Team Member</label>
                                                <div data-simplebar style={{height: '95px'}}>
                                                    <ul className="list-unstyled vstack gap-2 mb-0">
                                                        <li>
                                                            <div className="form-check d-flex align-items-center">
                                                                <input className="form-check-input me-3" type="checkbox" value="" id="anna-adame" />
                                                                <label className="form-check-label d-flex align-items-center" htmlFor="anna-adame">
                                                                    <span className="flex-shrink-0">
                                                                        <img src="/assets/images/users/avatar-1.jpg" alt="" className="avatar-xxs rounded-circle" />
                                                                    </span>
                                                                    <span className="flex-grow-1 ms-2">
                                                                        Anna Adame
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="form-check d-flex align-items-center">
                                                                <input className="form-check-input me-3" type="checkbox" value="" id="frank-hook" />
                                                                <label className="form-check-label d-flex align-items-center" htmlFor="frank-hook">
                                                                    <span className="flex-shrink-0">
                                                                        <img src="/assets/images/users/avatar-3.jpg" alt="" className="avatar-xxs rounded-circle" />
                                                                    </span>
                                                                    <span className="flex-grow-1 ms-2">
                                                                        Frank Hook
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="form-check d-flex align-items-center">
                                                                <input className="form-check-input me-3" type="checkbox" value="" id="alexis-clarke" />
                                                                <label className="form-check-label d-flex align-items-center" htmlFor="alexis-clarke">
                                                                    <span className="flex-shrink-0">
                                                                        <img src="/assets/images/users/avatar-6.jpg" alt="" className="avatar-xxs rounded-circle" />
                                                                    </span>
                                                                    <span className="flex-grow-1 ms-2">
                                                                        Alexis Clarke
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="form-check d-flex align-items-center">
                                                                <input className="form-check-input me-3" type="checkbox" value="" id="herbert-stokes" />
                                                                <label className="form-check-label d-flex align-items-center" htmlFor="herbert-stokes">
                                                                    <span className="flex-shrink-0">
                                                                        <img src="/assets/images/users/avatar-2.jpg" alt="" className="avatar-xxs rounded-circle" />
                                                                    </span>
                                                                    <span className="flex-grow-1 ms-2">
                                                                        Herbert Stokes
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="form-check d-flex align-items-center">
                                                                <input className="form-check-input me-3" type="checkbox" value="" id="michael-morris" />
                                                                <label className="form-check-label d-flex align-items-center" htmlFor="michael-morris">
                                                                    <span className="flex-shrink-0">
                                                                        <img src="/assets/images/users/avatar-7.jpg" alt="" className="avatar-xxs rounded-circle" />
                                                                    </span>
                                                                    <span className="flex-grow-1 ms-2">
                                                                        Michael Morris
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="form-check d-flex align-items-center">
                                                                <input className="form-check-input me-3" type="checkbox" value="" id="nancy-martino" />
                                                                <label className="form-check-label d-flex align-items-center" htmlFor="nancy-martino">
                                                                    <span className="flex-shrink-0">
                                                                        <img src="/assets/images/users/avatar-5.jpg" alt="" className="avatar-xxs rounded-circle" />
                                                                    </span>
                                                                    <span className="flex-grow-1 ms-2">
                                                                        Nancy Martino
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="form-check d-flex align-items-center">
                                                                <input className="form-check-input me-3" type="checkbox" value="" id="thomas-taylor" />
                                                                <label className="form-check-label d-flex align-items-center" htmlFor="thomas-taylor">
                                                                    <span className="flex-shrink-0">
                                                                        <img src="/assets/images/users/avatar-8.jpg" alt="" className="avatar-xxs rounded-circle" />
                                                                    </span>
                                                                    <span className="flex-grow-1 ms-2">
                                                                        Thomas Taylor
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="form-check d-flex align-items-center">
                                                                <input className="form-check-input me-3" type="checkbox" value="" id="tonya-noble" />
                                                                <label className="form-check-label d-flex align-items-center" htmlFor="tonya-noble">
                                                                    <span className="flex-shrink-0">
                                                                        <img src="/assets/images/users/avatar-10.jpg" alt="" className="avatar-xxs rounded-circle" />
                                                                    </span>
                                                                    <span className="flex-grow-1 ms-2">
                                                                        Tonya Noble
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-4">
                                                <label htmlFor="due-date" className="form-label">Due Date</label>
                                                <input type="text" className="form-control" id="due-date" data-provider="flatpickr" placeholder="Select date" />
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-4">
                                                <label htmlFor="categories" className="form-label">Tags</label>
                                                <input type="text" className="form-control" id="categories" placeholder="Enter tag" />
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-4">
                                                <label htmlFor="tasks-progress" className="form-label">Tasks Progress</label>
                                                <input type="text" className="form-control" maxLength="3" id="tasks-progress" placeholder="Enter progress" /> 
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="mt-4">
                                                <div className="hstack gap-2 justify-content-end">
                                                    <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-success">Add Task</button>
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
                                        </div>
                                        {/* <!--end row--> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--end add board modal--> */}

                    <div className="modal fade zoomIn" id="deleteRecordModal" tabIndex="-1" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="btn-close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="mt-2 text-center">
                                        <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop" colors="primary:#f7b84b,secondary:#f06548" style={{width: '100px',height:'100px'}}>
                                        </lord-icon>
                                        <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                                            <h4>Are you sure ?</h4>
                                            <p className="text-muted mx-4 mb-0">Are you sure you want to remove this tasks ?
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                                        <button type="button" className="btn w-sm btn-light" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn w-sm btn-danger" id="delete-record">Yes, Delete
                                            It!</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--end modal --> */}

                </div>
                {/* <!-- container-fluid --> */}
            </div>
            {/* <!-- End Page-content --> */}

            <Footer/>
        </div>
        {/* <!-- end main content--> */}

    </div>
    {/* <!-- END layout-wrapper --> */}



    {/* <!--start back-to-top--> */}
    <button className="btn btn-danger btn-icon" id="back-to-top">
        <i className="ri-arrow-up-line"></i>
    </button>
    {/* <!--end back-to-top--> */}

    {/* <!--preloader--> */}
    {/* <div id="preloader">
        <div id="status">
            <div className="spinner-border text-primary avatar-sm" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    </div> */}

    <div className="customizer-setting d-none d-md-block">
        <div className="btn-info btn-rounded shadow-lg btn btn-icon btn-lg p-2" data-bs-toggle="offcanvas" data-bs-target="#theme-settings-offcanvas" aria-controls="theme-settings-offcanvas">
            <i className='mdi mdi-spin mdi-cog-outline fs-22'></i>
        </div>
    </div>

    {/* <!-- Theme Settings --> */}
   <ChooseLayout/>
   </>
  )
}

export default TaskBoard