<%@page import="com.nexacro17.xapi.tx.PlatformType"%>
<%@page import="com.nexacro17.xapi.tx.HttpPlatformResponse"%>
<%@page import="com.nexacro17.xapi.data.PlatformData"%>
<%@page import="com.nexacro17.xapi.data.DataSet"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>all.jsp</title>
</head>
<body>
<%	//HttpPlatformResponse �ػ�ũ�ο��� �������ִ� ���䰴ü�� ���ؼ� �����ͼ��� �����Ѵ�.
	DataSet ds1 = (DataSet)request.getAttribute("ds");
	PlatformData pData = new PlatformData();
	pData.addDataSet(ds1);
	HttpPlatformResponse res =
			new HttpPlatformResponse(response,PlatformType.CONTENT_TYPE_XML,"utf-8");
	out.clear();
	out = pageContext.pushBody();
	res.setData(pData);
	res.sendData();
%>
</body>
</html>