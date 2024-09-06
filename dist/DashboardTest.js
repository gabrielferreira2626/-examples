function setValue(executionContext) {
    var formContext = executionContext.getFormContext();
    var attrDashboardName = formContext.getAttribute('power_name').getValue();
    if (attrDashboardName) {
        attrDashboardName.setValue("Dashboard Name");
    }
}
