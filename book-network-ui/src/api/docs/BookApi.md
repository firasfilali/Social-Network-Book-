# OpenApiSpecificationFiras.BookApi

All URIs are relative to *http://localhost:8089/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approveReturnBorrowBook**](BookApi.md#approveReturnBorrowBook) | **PATCH** /books/borrow/return/approve/{book-id} | 
[**borrowBook**](BookApi.md#borrowBook) | **POST** /books/borrow/{book-id} | 
[**findAllBooks**](BookApi.md#findAllBooks) | **GET** /books | 
[**findAllBooksByOwner**](BookApi.md#findAllBooksByOwner) | **GET** /books/owner | 
[**findAllBorrowedBooks**](BookApi.md#findAllBorrowedBooks) | **GET** /books/borrowed | 
[**findAllReturnedBooks**](BookApi.md#findAllReturnedBooks) | **GET** /books/returned | 
[**findBookById**](BookApi.md#findBookById) | **GET** /books/{book-id} | 
[**returnBorrowBook**](BookApi.md#returnBorrowBook) | **PATCH** /books/borrow/return/{book-id} | 
[**saveBook**](BookApi.md#saveBook) | **POST** /books | 
[**updateArchivedStatus**](BookApi.md#updateArchivedStatus) | **PATCH** /books/archived/{book-id} | 
[**updateShareableStatus**](BookApi.md#updateShareableStatus) | **PATCH** /books/shareable/{book-id} | 
[**uploadBookCoverPicture**](BookApi.md#uploadBookCoverPicture) | **POST** /books/cover/{book-id} | 



## approveReturnBorrowBook

> Number approveReturnBorrowBook(bookId)



### Example

```javascript
import OpenApiSpecificationFiras from 'open_api_specification_firas';
let defaultClient = OpenApiSpecificationFiras.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenApiSpecificationFiras.BookApi();
let bookId = 56; // Number | 
apiInstance.approveReturnBorrowBook(bookId, (error, data, response) => {
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

### Return type

**Number**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## borrowBook

> Number borrowBook(bookId)



### Example

```javascript
import OpenApiSpecificationFiras from 'open_api_specification_firas';
let defaultClient = OpenApiSpecificationFiras.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenApiSpecificationFiras.BookApi();
let bookId = 56; // Number | 
apiInstance.borrowBook(bookId, (error, data, response) => {
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

### Return type

**Number**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findAllBooks

> PageResponseBookResponse findAllBooks(opts)



### Example

```javascript
import OpenApiSpecificationFiras from 'open_api_specification_firas';
let defaultClient = OpenApiSpecificationFiras.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenApiSpecificationFiras.BookApi();
let opts = {
  'page': 0, // Number | 
  'size': 10 // Number | 
};
apiInstance.findAllBooks(opts, (error, data, response) => {
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
 **page** | **Number**|  | [optional] [default to 0]
 **size** | **Number**|  | [optional] [default to 10]

### Return type

[**PageResponseBookResponse**](PageResponseBookResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findAllBooksByOwner

> PageResponseBookResponse findAllBooksByOwner(opts)



### Example

```javascript
import OpenApiSpecificationFiras from 'open_api_specification_firas';
let defaultClient = OpenApiSpecificationFiras.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenApiSpecificationFiras.BookApi();
let opts = {
  'page': 0, // Number | 
  'size': 10 // Number | 
};
apiInstance.findAllBooksByOwner(opts, (error, data, response) => {
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
 **page** | **Number**|  | [optional] [default to 0]
 **size** | **Number**|  | [optional] [default to 10]

### Return type

[**PageResponseBookResponse**](PageResponseBookResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findAllBorrowedBooks

> PageResponseBorrowedBookResponse findAllBorrowedBooks(opts)



### Example

```javascript
import OpenApiSpecificationFiras from 'open_api_specification_firas';
let defaultClient = OpenApiSpecificationFiras.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenApiSpecificationFiras.BookApi();
let opts = {
  'page': 0, // Number | 
  'size': 10 // Number | 
};
apiInstance.findAllBorrowedBooks(opts, (error, data, response) => {
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
 **page** | **Number**|  | [optional] [default to 0]
 **size** | **Number**|  | [optional] [default to 10]

### Return type

[**PageResponseBorrowedBookResponse**](PageResponseBorrowedBookResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findAllReturnedBooks

> PageResponseBorrowedBookResponse findAllReturnedBooks(opts)



### Example

```javascript
import OpenApiSpecificationFiras from 'open_api_specification_firas';
let defaultClient = OpenApiSpecificationFiras.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenApiSpecificationFiras.BookApi();
let opts = {
  'page': 0, // Number | 
  'size': 10 // Number | 
};
apiInstance.findAllReturnedBooks(opts, (error, data, response) => {
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
 **page** | **Number**|  | [optional] [default to 0]
 **size** | **Number**|  | [optional] [default to 10]

### Return type

[**PageResponseBorrowedBookResponse**](PageResponseBorrowedBookResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findBookById

> BookResponse findBookById(bookId)



### Example

```javascript
import OpenApiSpecificationFiras from 'open_api_specification_firas';
let defaultClient = OpenApiSpecificationFiras.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenApiSpecificationFiras.BookApi();
let bookId = 56; // Number | 
apiInstance.findBookById(bookId, (error, data, response) => {
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

### Return type

[**BookResponse**](BookResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## returnBorrowBook

> Number returnBorrowBook(bookId)



### Example

```javascript
import OpenApiSpecificationFiras from 'open_api_specification_firas';
let defaultClient = OpenApiSpecificationFiras.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenApiSpecificationFiras.BookApi();
let bookId = 56; // Number | 
apiInstance.returnBorrowBook(bookId, (error, data, response) => {
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

### Return type

**Number**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## saveBook

> Number saveBook(bookRequest)



### Example

```javascript
import OpenApiSpecificationFiras from 'open_api_specification_firas';
let defaultClient = OpenApiSpecificationFiras.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenApiSpecificationFiras.BookApi();
let bookRequest = new OpenApiSpecificationFiras.BookRequest(); // BookRequest | 
apiInstance.saveBook(bookRequest, (error, data, response) => {
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
 **bookRequest** | [**BookRequest**](BookRequest.md)|  | 

### Return type

**Number**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateArchivedStatus

> Number updateArchivedStatus(bookId)



### Example

```javascript
import OpenApiSpecificationFiras from 'open_api_specification_firas';
let defaultClient = OpenApiSpecificationFiras.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenApiSpecificationFiras.BookApi();
let bookId = 56; // Number | 
apiInstance.updateArchivedStatus(bookId, (error, data, response) => {
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

### Return type

**Number**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateShareableStatus

> Number updateShareableStatus(bookId)



### Example

```javascript
import OpenApiSpecificationFiras from 'open_api_specification_firas';
let defaultClient = OpenApiSpecificationFiras.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenApiSpecificationFiras.BookApi();
let bookId = 56; // Number | 
apiInstance.updateShareableStatus(bookId, (error, data, response) => {
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

### Return type

**Number**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## uploadBookCoverPicture

> Object uploadBookCoverPicture(bookId, file)



### Example

```javascript
import OpenApiSpecificationFiras from 'open_api_specification_firas';
let defaultClient = OpenApiSpecificationFiras.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenApiSpecificationFiras.BookApi();
let bookId = 56; // Number | 
let file = "/path/to/file"; // File | 
apiInstance.uploadBookCoverPicture(bookId, file, (error, data, response) => {
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
 **file** | **File**|  | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

