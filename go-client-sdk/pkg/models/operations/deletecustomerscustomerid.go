package operations

type DeleteCustomersCustomerIDPathParams struct {
	CustomerID string `pathParam:"style=simple,explode=false,name=customer_id"`
}

type DeleteCustomersCustomerIDRequest struct {
	PathParams DeleteCustomersCustomerIDPathParams
}

type DeleteCustomersCustomerIDResponse struct {
	ContentType string
	StatusCode  int64
}
