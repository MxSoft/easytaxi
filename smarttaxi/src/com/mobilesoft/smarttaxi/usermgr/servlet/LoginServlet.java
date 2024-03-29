
package com.mobilesoft.smarttaxi.usermgr.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mobilesoft.smarttaxi.common.Messages;
import com.mobilesoft.smarttaxi.common.SystemPara;
import com.mobilesoft.smarttaxi.common.utils.BeanFactoryUtil;
import com.mobilesoft.smarttaxi.usermgr.service.LoginService;

/**
 * Servlet implementation class LoginServlet
 */
public class LoginServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    private LoginService loginService;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
        super();
        loginService = (LoginService) BeanFactoryUtil.getBean("loginService");
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException,
        IOException {
		String type = request.getParameter("type");
		String account = request.getParameter("account");

		String password = request.getParameter("password");
		String userid = loginService.getValidUserid(type, account, password);

		if (!userid.equals("")) {
			// 成功登陆后，userid放到session中
			request.getSession()
					.setAttribute(SystemPara.SESSION_USERID, userid);
			request.getSession().removeAttribute(SystemPara.SESSION_ERRORINFO);
			Object object = null;
			if (type.equals("taxi")) {
				object = loginService.getTaxiDetailInfo(userid);
			} else {
				object = loginService.getPassengerDetailInfo(userid);
			}
			request.getSession().setAttribute(SystemPara.SESSION_USER, object);
			response.sendRedirect("index.jsp");
		} else {
			response.sendRedirect("login.jsp");
			request.getSession().setAttribute(SystemPara.SESSION_ERRORINFO,
					Messages.LOGIN_ERROR);
		}

    }

}
