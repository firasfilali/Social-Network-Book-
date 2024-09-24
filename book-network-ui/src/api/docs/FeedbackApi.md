# OpenApiSpecificationFiras.FeedbackApi

All URIs are relative to *http://localhost:8089/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findAllFeedbacksByBook**](FeedbackApi.md#findAllFeedbacksByBook) | **GET** /feedbacks/book/{book-id} | 
[**saveFeedback**](FeedbackApi.md#saveFeedback) | **POST** /feedbacks | 



## findAllFeedbacksByBook

> PageResponseFeedbackResponse findAllFeedbacksByBook(bookId, opts)



### Example

```javascript
import OpenApiSpecificationFiras from 'open_api_specification_firas';
let defaultClient = OpenApiSpecificationFiras.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenApiSpecificationFiras.FeedbackApi();
let bookId = 56; // Number | 
let opts = {
  'page': 0, // Number | 
  'size': 10 // Number | 
};
apiInstance.findAllFeedbacksByBook(bookId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookId** | **Number**|  | 
 **page** | **Number**|  | [optional] [default to 0]
 **size** | **Number**|  | [optional] [default to 10]

### Return type

[**PageResponseFeedbackResponse**](PageResponseFeedbackResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## saveFeedback

> Number saveFeedback(feedbackRequest)



### Example

```javascript
import OpenApiSpecificationFiras from 'open_api_specification_firas';
let defaultClient = OpenApiSpecificationFiras.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenApiSpecificationFiras.FeedbackApi();
let feedbackRequest = new OpenApiSpecificationFiras.FeedbackRequest(); // FeedbackRequest | 
apiInstance.saveFeedback(feedbackRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **feedbackRequest** | [**FeedbackRequest**](FeedbackRequest.md)|  | 

### Return type

**Number**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

