<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="Refresh" content="10; url=test.jsp" /> 
<title>Index page</title>
</head>
<body>
<h3>
Welcome to <a href="http://ditu.google.cn/maps?hl=zh-cn&tab=wl">Google Map</a>!<br/>
Test Memory SQLite! Click <a href="<%=request.getContextPath() %>/TestSqliteServlet">here</a> To query the data from the sqlite(test.db)
10 seconds later, the index page will forward to error page!
</h3>
</body>
</html>