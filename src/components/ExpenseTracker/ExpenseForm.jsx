import { Formik } from "formik";
import { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import * as Yup from "yup";

// To display the form to add a new expense or to edit an existing expense, we need to create a new component called ExpenseForm. This component will be a child of the ExpenseTracker component. We will pass the addExpense function as a prop to the ExpenseForm component. The addExpense function will be called when the user clicks the Add Expense button. The addExpense function will add the new expense to the expenses array. The expenses array will be passed as a prop to the ExpenseList component. The ExpenseList component will display the expenses in a table.

const ExpenseForm = ({ addExpense }) => {
  const itemRef = useRef(null);

  return (
    <Formik
      enableReinitialize
      initialValues={{ item: "", cost: "" }}
      validationSchema={Yup.object({
        item: Yup.string().required("Item is required").nullable(),
        cost: Yup.number().required("Cost is required"),
      })}
      onSubmit={(values, actions) => {
        addExpense(values);
        // reset the form
        actions.resetForm();
        // set the focus to the item field
        itemRef.current.focus();
      }}
    >
      {({
        values,
        touched,
        errors,
        handleChange,
        handleSubmit,
        handleBlur,
      }) => {
        return (
          <Form onSubmit={handleSubmit} autoComplete={"off"}>
            <Form.Group className="form-group row">
              <div className="col-xs-2">
                <Form.Label>Item</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter item"
                  value={values.item}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="item"
                  ref={itemRef}
                />

                {errors.item && touched.item && (
                  <div className="text-danger">{errors.item}</div>
                )}
              </div>
            </Form.Group>
            <Form.Group className="form-group row">
              <div className="col-xs-2">
                <Form.Label>Cost</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter cost"
                  value={values.cost}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="cost"
                />
                {errors.cost && touched.cost && (
                  <div className="text-danger">{errors.cost}</div>
                )}
              </div>
            </Form.Group>
            <Button
              type="submit"
              className="btn btn-primary mt-3"
              onSubmit={handleSubmit}
            >
              Add Expense
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ExpenseForm;
