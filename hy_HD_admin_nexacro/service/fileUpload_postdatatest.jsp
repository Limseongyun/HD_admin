<%@ page contentType="text/html;charset=utf-8" pageEncoding="utf-8" %>
<%@ page language="java"%>
<%@ page import="java.io.File"%>
<%@ page import="java.io.IOException"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.Enumeration"%>
<%@ page import="java.util.Iterator"%>
<%@ page import="java.util.List"%>

<%@ page import="javax.servlet.ServletException"%>
<%@ page import="javax.servlet.http.HttpServletRequest"%>
<%@ page import="javax.servlet.http.HttpServletResponse"%>

<%@ page import="com.oreilly.servlet.*"%>
<%@ page import="com.oreilly.servlet.MultipartRequest"%>
<%@ page import="com.oreilly.servlet.multipart.DefaultFileRenamePolicy"%>

<%@ page import="com.nexacro17.xapi.tx.*" %>
<%@ page import="com.nexacro17.xapi.data.*" %>

<%
	request.setCharacterEncoding("UTF-8");

	String contextRealPath	= request.getSession().getServletContext().getRealPath("/");
	String getFolderName	= request.getParameter("filefolder");
	
	String savePath = contextRealPath + getFolderName + "\\";
	
	int maxSize = 1000 * 1024 * 1024;
	
	File extFolder = new File(savePath);
	if(!extFolder.exists())
	{
		extFolder.mkdir();
	}

	PlatformData resData = new PlatformData();
	VariableList resVarList = resData.getVariableList();

	try
	{
		MultipartRequest multi = new MultipartRequest(request, savePath, maxSize, "utf-8", new DefaultFileRenamePolicy());		
		Enumeration files = multi.getFileNames();
		
		DataSet ds = new DataSet("ds_uploadresult");

		ds.addColumn(new ColumnHeader("fileName", DataTypes.STRING));
		ds.addColumn(new ColumnHeader("fileSize", DataTypes.LONG));
		ds.addColumn(new ColumnHeader("fileType", DataTypes.STRING));
		ds.addColumn(new ColumnHeader("savePath", DataTypes.STRING));
		
		while (files.hasMoreElements())
		{
			String name = (String)files.nextElement();

			String fileName = multi.getFilesystemName(name);
			String type		= multi.getContentType(name);

			File f = multi.getFile(name);
			int row = ds.newRow(0);
			ds.set(row, "fileName", fileName);
			ds.set(row, "fileType", type);
			
			if (f != null)
			{
				ds.set(row, "savePath", f.getPath());
				ds.set(row, "fileSize", f.length());
			}
		}

		resData.addDataSet(ds);
		resVarList.add("ErrorCode", 0);
		resVarList.add("ErrorMsg", "Success" );
	}
	catch (Exception e)
	{
		System.out.println(e.getMessage());
		DataSet dsError = new DataSet("ds_error");
		dsError.addColumn(new ColumnHeader("ErrorMsg", DataTypes.STRING));
		dsError.addColumn(new ColumnHeader("ErrorCode", DataTypes.LONG));

		dsError.set(dsError.newRow(), "ErrorCode", -1);
		dsError.set(dsError.newRow(), "ErrorMsg", e.getMessage());

		resData.addDataSet(dsError);
	}

	HttpPlatformResponse res = new HttpPlatformResponse(response, request);
	res.setContentType(PlatformType.CONTENT_TYPE_XML);
	res.setCharset("UTF-8");
	res.setData(resData);
	res.sendData();

%>
