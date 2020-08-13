package mvc.controller;

import java.util.List;


import javax.servlet.http.HttpSession;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.servlet.ModelAndView;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;


import mvc.dao.LoginDAO;
import mvc.vo.EmployeeVO;

@Controller
public class DefaultController {
	@Autowired
	private LoginDAO logindao;
	
	@RequestMapping(value = "/login")
	public ModelAndView login(EmployeeVO vo,HttpSession session) {
		ModelAndView mav = new ModelAndView();
		
		String check=logindao.logincheck(vo);
		
		System.out.println(check);
		
		if(check.equals("1")) {
			System.out.println("start-----");
			List<EmployeeVO> logininfo= logindao.logininfo(vo);
			System.out.println(logininfo);
			DataSet ds = new DataSet("ar");
			ds.addColumn("hd_code",DataTypes.STRING,30);
			ds.addColumn("hd_pw", DataTypes.STRING,256);
			ds.addColumn("check",DataTypes.STRING,30);
			ds.addColumn("level",DataTypes.STRING,30);
			for(EmployeeVO e : logininfo) {
				int row = ds.newRow();
				ds.set(row, "hd_code", e.getHd_code());
				ds.set(row, "hd_pw", e.getHd_pw());
				ds.set(row, "check", "ok");
				ds.set(row,"level",e.getHd_level());
			}
			mav.addObject("ds",ds);
			mav.setViewName("all");
			session.setAttribute("logininfo", logininfo);
//			Cookie loginCookie = new Cookie("logininfo", logininfo.get(0).getHd_name());
//			loginCookie.setMaxAge(10);
//			resp.addCookie(loginCookie);
//			System.out.println(loginCookie.getName());
//			System.out.println(loginCookie.getValue());
		}else {
			mav.setViewName("redirect:/");
		}
		
		
		return mav;
		
		
	}
	
	@RequestMapping(value = "/logout")
	public ModelAndView logout(HttpSession session) {
		ModelAndView mav = new ModelAndView("redirect:/");
		session.removeAttribute("logininfo");
		
		
		return mav;
	}
	
	@RequestMapping(value = "/logincheck")
	public ModelAndView logincheck(HttpSession session) {
		ModelAndView mav = new ModelAndView("redirect:/");
		DataSet ds = new DataSet("ar");
		
		
		ds.addColumn("check",DataTypes.STRING,100);
		List<EmployeeVO> logininfo= (List<EmployeeVO>) session.getAttribute("logininfo");
		int row = ds.newRow();
		ds.set(row, "check", logininfo.get(0).getHd_name());
			
		mav.addObject("ds",ds);
		mav.setViewName("all");
		return mav;
	}
}
