
package com.easytaxi.usermgr.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.easytaxi.common.Messages;
import com.easytaxi.common.SystemPara;
import com.easytaxi.common.utils.BeanFactoryUtil;
import com.easytaxi.usermgr.service.LoginService;

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
        if (type.equals("check")) {
            String result = "{\"result\":\"ok\"}";
            String formId = request.getParameter("formId");
            if (formId == null)
                formId = "";

            String value = request.getParameter("objectValue");
            if (value == null)
                value = "";
            // String descr = request.getParameter("descr");
            // if (descr == null)
            // descr = "Unknown Error";
            if (!value.equals("")) {
                Object object = null;
                if (formId.contains("passenger")) {// passenger
                    object = loginService.getPassengerBy(value);
                } else {
                    // value = new String(value.getBytes("ISO8859-1"), "UTF-8");
                    object = loginService.getTaxiBy(value);
                }
                if (object == null) {
                    result = "{\"result\":\"none\"}";
                }
            }
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            response.getWriter().println(result);
            response.getWriter().close();
        } else {
            String password = request.getParameter("password");
            String userid = loginService.getValidUserid(type, account, password);

            if (!userid.equals("")) {
                // 成功登陆后，userid放到session中
                request.getSession().setAttribute(SystemPara.SESSION_USERID, userid);
                request.getSession().removeAttribute(SystemPara.SESSION_ERRORINFO);
                Object object = null;
                if (type.equals("taxi")) {
                    object = loginService.getTaxiDetailInfo(userid);
                } else {
                    object = loginService.getPassengerDetailInfo(userid);
                }
                request.getSession().setAttribute(SystemPara.SESSION_USER, object);
                response.sendRedirect("welcome.jsp");
            } else {
                response.sendRedirect("login.jsp");
                request.getSession().setAttribute(SystemPara.SESSION_ERRORINFO, Messages.LOGIN_ERROR);
            }
        }

    }

}
