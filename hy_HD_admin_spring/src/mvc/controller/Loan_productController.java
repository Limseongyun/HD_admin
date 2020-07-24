package mvc.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;

import mvc.dao.Loan_productDAO;
import mvc.vo.Loan_productVO;
import mvc.vo.SearchVO;

@Controller
public class Loan_productController {
	@Autowired
	private Loan_productDAO loan_productDAO;
	
	@RequestMapping(value = "/lpAdd")
	public ModelAndView lpAdd(Loan_productVO vo) {
		ModelAndView mav = new ModelAndView("redirect:/");
		try {
			String lp_name = URLDecoder.decode(vo.getLp_name(), "UTF-8");
			String dambo = URLDecoder.decode(vo.getLp_dambo(), "UTF-8");
			System.out.println(lp_name);
			System.out.println(dambo);
			vo.setLp_name(lp_name);
			vo.setLp_dambo(dambo);
			loan_productDAO.addloanproduct(vo);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return mav;
	}
	
	@RequestMapping(value = "/all")
	public String defaultMain(Model model) {
		List<Loan_productVO> list = loan_productDAO.getDeptList();
		System.out.println("start");
		DataSet ds = new DataSet("ar");
		
		ds.addColumn("lp_num", DataTypes.INT,10);
		ds.addColumn("lp_name", DataTypes.STRING,30);
		ds.addColumn("lp_interestrate", DataTypes.FLOAT,10);
		ds.addColumn("lp_cancelfee", DataTypes.FLOAT,10);
		ds.addColumn("lp_maximum", DataTypes.INT,20);
		ds.addColumn("lp_dambo", DataTypes.STRING,20);
		System.out.println("addcolumn");
		for(Loan_productVO e : list) {
			int row = ds.newRow();
			ds.set(row, "lp_num", e.getLp_num());
			ds.set(row, "lp_name", e.getLp_name());
			ds.set(row, "lp_interestrate", e.getLp_interestrate());
			ds.set(row, "lp_cancelfee", e.getLp_cancelfee());
			ds.set(row, "lp_maximum", e.getLp_maximum());
			ds.set(row, "lp_dambo", e.getLp_dambo());
		}
		model.addAttribute("ds", ds);
		return "all";
	}
	
	@RequestMapping(value = "/search")
	public ModelAndView search(SearchVO vo) {
		
		/*
		 * try { String searchvalue = URLDecoder.decode(vo.getSearchvalue(),"URF-8");
		 * vo.setSearchvalue(searchvalue); } catch (UnsupportedEncodingException e1) {
		 * // TODO Auto-generated catch block e1.printStackTrace(); }
		 */
		
		System.out.println(vo.getSearchtype());
		System.out.println(vo.getSearchvalue());
		ModelAndView mav = new ModelAndView("all");
		List<Loan_productVO> list =  loan_productDAO.getsearchDeptList(vo);
		
		DataSet ds = new DataSet("ar");
		
		ds.addColumn("lp_num", DataTypes.INT,10);
		ds.addColumn("lp_name", DataTypes.STRING,30);
		ds.addColumn("lp_interestrate", DataTypes.FLOAT,10);
		ds.addColumn("lp_cancelfee", DataTypes.FLOAT,10);
		ds.addColumn("lp_maximum", DataTypes.INT,20);
		ds.addColumn("lp_dambo", DataTypes.STRING,20);
		
		for(Loan_productVO e : list) {
			int row = ds.newRow();
			ds.set(row, "lp_num", e.getLp_num());
			ds.set(row, "lp_name", e.getLp_name());
			ds.set(row, "lp_interestrate", e.getLp_interestrate());
			ds.set(row, "lp_cancelfee", e.getLp_cancelfee());
			ds.set(row, "lp_maximum", e.getLp_maximum());
			ds.set(row, "lp_dambo", e.getLp_dambo());
		}
		mav.addObject("ds", ds);
		return mav;
	}
	
	@RequestMapping(value = "/lpdel")
	public ModelAndView lpdel(Loan_productVO vo) {
		ModelAndView mav = new ModelAndView("redirect:/");
		int lp_num = vo.getLp_num();
		loan_productDAO.delloanproduct(lp_num);
		return mav;
	}
	
}
