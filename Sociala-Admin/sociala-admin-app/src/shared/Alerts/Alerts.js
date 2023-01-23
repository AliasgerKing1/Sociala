import React from 'react'

const AlertDanger = (props) => {
  return (
                                                    <div className="alert alert-danger alert-border-left alert-dismissible fade show mb-xl-0 mt-4" role="alert">
                                                    <i className="ri-error-warning-line me-3 align-middle fs-16"></i><strong>{props.msg}</strong>
                                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                </div>
  )
}

<h6>Primary Alert</h6>
<div class="alert alert-primary alert-border-left alert-dismissible fade show" role="alert">
    <i class="ri-user-smile-line me-3 align-middle fs-16"></i><strong>Primary</strong>
    - Left border alert
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

<h6>Secondary Alert</h6>
<div class="alert alert-secondary alert-border-left alert-dismissible fade show" role="alert">
    <i class="ri-check-double-line me-3 align-middle fs-16"></i><strong>Secondary</strong>
    - Left border alert
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

<h6>Success Alert</h6>
<div class="alert alert-success alert-border-left alert-dismissible fade show" role="alert">
    <i class="ri-notification-off-line me-3 align-middle fs-16"></i><strong>Success</strong>
    - Left border alert
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

<h6>Danger Alert</h6>
<div class="alert alert-danger alert-border-left alert-dismissible fade show mb-xl-0" role="alert">
    <i class="ri-error-warning-line me-3 align-middle fs-16"></i><strong>Danger</strong>
    - Left border alert
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
</div>

<div class="col-xl-6">
<h6>Warning Alert</h6>
<div class="alert alert-warning alert-border-left alert-dismissible fade show" role="alert">
    <i class="ri-alert-line me-3 align-middle fs-16"></i><strong>Warning</strong>
    - Left border alert
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

<h6>Info Alert</h6>
<div class="alert alert-info alert-border-left alert-dismissible fade show" role="alert">
    <i class="ri-airplay-line me-3 align-middle fs-16"></i><strong>Info</strong>
    - Left border alert
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

<h6>Light Alert</h6>
<div class="alert alert-light alert-border-left alert-dismissible fade show" role="alert">
    <i class="ri-mail-line me-3 align-middle fs-16"></i><strong>Light</strong>
    - Left border alert
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

<h6>Dark Alert</h6>
<div class="alert alert-dark alert-border-left alert-dismissible fade show mb-0" role="alert">
    <i class="ri-refresh-line me-3  align-middle fs-16"></i><strong>Dark</strong>
    - Left border alert
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
export {AlertDanger}