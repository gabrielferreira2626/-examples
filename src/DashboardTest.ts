function setValue(executionContext: any): void {
  const formContext = executionContext.getFormContext();

  const attrDashboardName: Xrm.Attributes.StringAttribute = formContext.getAttribute('power_name').getValue();

  if (attrDashboardName) {
    attrDashboardName.setValue("Dashboard Name");
  }
}