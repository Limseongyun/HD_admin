package mvc.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;
import com.nexacro17.xapi.data.datatype.DataType;

import mvc.dao.Loan_productDAO;
import mvc.vo.Loan_FileVO;
import mvc.vo.Loan_detailVO;
import mvc.vo.Loan_productVO;
import mvc.vo.Loan_screenVO;
import mvc.vo.Loan_screensearchVO;
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
		DataSet ds = new DataSet("ar");

		ds.addColumn("lp_num", DataTypes.INT, 10);
		ds.addColumn("lp_name", DataTypes.STRING, 30);
		ds.addColumn("lp_interestrate", DataTypes.FLOAT, 10);
		ds.addColumn("lp_cancelfee", DataTypes.FLOAT, 10);
		ds.addColumn("lp_maximum", DataTypes.INT, 20);
		ds.addColumn("lp_dambo", DataTypes.STRING, 20);
		for (Loan_productVO e : list) {
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
		System.out.println("검색!");
		ModelAndView mav = new ModelAndView("all");
		List<Loan_productVO> list = loan_productDAO.getsearchDeptList(vo);

		DataSet ds = new DataSet("ar");

		ds.addColumn("lp_num", DataTypes.INT, 10);
		ds.addColumn("lp_name", DataTypes.STRING, 30);
		ds.addColumn("lp_interestrate", DataTypes.FLOAT, 10);
		ds.addColumn("lp_cancelfee", DataTypes.FLOAT, 10);
		ds.addColumn("lp_maximum", DataTypes.INT, 20);
		ds.addColumn("lp_dambo", DataTypes.STRING, 20);

		for (Loan_productVO e : list) {
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

	@RequestMapping(value = "/lpname")
	public ModelAndView lpname() {
		ModelAndView mav = new ModelAndView("all");
		List<Loan_productVO> list = loan_productDAO.getlpname();
		DataSet ds = new DataSet("ar");
		ds.addColumn("lp_name", DataTypes.STRING, 30);
		int row = ds.newRow();
		ds.set(row, "lp_name", "전체");
		for (Loan_productVO e : list) {
			row = ds.newRow();
			ds.set(row, "lp_name", e.getLp_name());
		}
		mav.addObject("ds", ds);
		return mav;
	}

	@RequestMapping(value = "/lcnum")
	public ModelAndView lcnum() {
		ModelAndView mav = new ModelAndView("all");
		List<Loan_screenVO> list = loan_productDAO.getlcnum();
		DataSet ds = new DataSet("ar");
		ds.addColumn("lc_num", DataTypes.INT, 30);
		int row = ds.newRow();
		ds.set(row, "lc_num", 000);
		for (Loan_screenVO e : list) {
			row = ds.newRow();
			ds.set(row, "lc_num", e.getLc_num());
		}
		mav.addObject("ds", ds);
		return mav;
	}

	@RequestMapping(value = "/getscreen")
	public ModelAndView loan_screening() {
		ModelAndView mav = new ModelAndView("all");
		DataSet ds = new DataSet("ar");
		System.out.println("");
		List<Loan_screenVO> list = loan_productDAO.getscreen();
		ds.addColumn("lc_num", DataTypes.INT, 10);
		ds.addColumn("lp_name", DataTypes.STRING, 30);
		ds.addColumn("lc_state", DataTypes.STRING, 30);
		ds.addColumn("mem_code", DataTypes.INT, 10);
		ds.addColumn("mem_name", DataTypes.STRING, 20);
		ds.addColumn("hd_code", DataTypes.INT, 20);
		ds.addColumn("la_hamount", DataTypes.INT, 30);
		ds.addColumn("la_startdate", DataTypes.STRING, 30);
		ds.addColumn("la_sysdate", DataTypes.STRING, 30);
		for (Loan_screenVO e : list) {
			int row = ds.newRow();
			ds.set(row, "lc_num", e.getLc_num());
			ds.set(row, "lp_name", e.getLp_name());
			ds.set(row, "lc_state", e.getLc_state());
			ds.set(row, "mem_code", e.getMem_code());
			ds.set(row, "mem_name", e.getMem_name());
			ds.set(row, "hd_code", e.getHd_code());
			ds.set(row, "la_hamount", e.getLa_hamount());
			ds.set(row, "la_startdate", e.getLa_startdate());
			ds.set(row, "la_sysdate", e.getLa_sysdate());
		}

		mav.addObject("ds", ds);
		return mav;
	}

	@RequestMapping(value = "/searchscreen")
	public ModelAndView searchscreen(Loan_screensearchVO vo) {

		System.out.println("검색!");
		ModelAndView mav = new ModelAndView("all");
		System.out.println(vo.getFrom_dt());
		System.out.println(vo.getLc_num());
		System.out.println(vo.getLc_state());
		System.out.println(vo.getLp_name());
		System.out.println(vo.getMem_name());
		System.out.println(vo.getTo_dt());
		
		try {
			vo.setLc_state(URLDecoder.decode(vo.getLc_state(), "UTF-8"));
			vo.setLp_name(URLDecoder.decode(vo.getLp_name(), "UTF-8"));
			System.out.println(vo.getLc_state());
			System.out.println(vo.getLp_name());
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		
		
		List<Loan_screenVO> list = loan_productDAO.searchscreen(vo);
		System.out.println(list);
		DataSet ds = new DataSet("ar");
		ds.addColumn("lc_num", DataTypes.INT, 10);
		ds.addColumn("lp_name", DataTypes.STRING, 30);
		ds.addColumn("lc_state", DataTypes.STRING, 30);
		ds.addColumn("mem_code", DataTypes.INT, 10);
		ds.addColumn("mem_name", DataTypes.STRING, 20);
		ds.addColumn("hd_code", DataTypes.INT, 20);
		ds.addColumn("la_hamount", DataTypes.INT, 30);
		ds.addColumn("la_startdate", DataTypes.STRING, 30);
		ds.addColumn("la_sysdate", DataTypes.STRING, 30);
		for (Loan_screenVO e : list) {
			int row = ds.newRow();
			ds.set(row, "lc_num", e.getLc_num());
			ds.set(row, "lp_name", e.getLp_name());
			ds.set(row, "lc_state", e.getLc_state());
			ds.set(row, "mem_code", e.getMem_code());
			ds.set(row, "mem_name", e.getMem_name());
			ds.set(row, "hd_code", e.getHd_code());
			ds.set(row, "la_hamount", e.getLa_hamount());
			ds.set(row, "la_startdate", e.getLa_startdate());
			ds.set(row, "la_sysdate", e.getLa_sysdate());
		}

		mav.addObject("ds", ds);
		return mav;
	}

	@RequestMapping(value = "/getdetail")
	public String getdetail(Model model, int lc_num) {
		Loan_detailVO vo = loan_productDAO.getdetatil(lc_num);
		DataSet ds = new DataSet("ar");
		
		ds.addColumn("lc_num", DataTypes.INT, 10);
		ds.addColumn("mem_email", DataTypes.STRING, 30);
		ds.addColumn("mem_name", DataTypes.STRING, 20);
		ds.addColumn("mem_birth", DataTypes.STRING, 20);
		ds.addColumn("la_hamount", DataTypes.INT, 20);
		ds.addColumn("la_sysdate", DataTypes.STRING, 30);
		ds.addColumn("lp_name", DataTypes.STRING, 30);
		ds.addColumn("la_startdate", DataTypes.STRING, 30);
		ds.addColumn("lc_state", DataTypes.STRING, 30);
		ds.addColumn("lr_type", DataTypes.STRING, 30);
		ds.addColumn("la_livingterm", DataTypes.STRING, 30);
		ds.addColumn("la_repayterm", DataTypes.STRING, 30);

		int row = ds.newRow();
		ds.set(row, "lc_num", vo.getLc_num());
		ds.set(row, "mem_email", vo.getMem_email());
		ds.set(row, "mem_name", vo.getMem_name());
		ds.set(row, "mem_birth", vo.getMem_birth());
		ds.set(row, "la_hamount", vo.getLa_hamount());
		ds.set(row, "la_sysdate", vo.getLa_sysdate());
		ds.set(row, "lp_name", vo.getLp_name());
		ds.set(row, "la_startdate", vo.getLa_startdate());
		ds.set(row, "lc_state", vo.getLc_state());
		ds.set(row, "lr_type", vo.getLr_type());
		ds.set(row, "la_livingterm", vo.getLa_livingterm());
		ds.set(row, "la_repayterm", vo.getLa_repayterm());

		model.addAttribute("ds", ds);
		return "all";
	}

	@RequestMapping(value = "/stateupdate")
	public ModelAndView stateupdate(Loan_screensearchVO vo) {
		ModelAndView mav = new ModelAndView("redirect:/");
		loan_productDAO.stateupdate(vo);
		return mav;
	}
	
	@RequestMapping(value = "/filecheck") 
	public ModelAndView filecheck(int lc_num) {
		ModelAndView mav = new ModelAndView("all"); 
		List<Loan_FileVO> list = loan_productDAO.filecheck(lc_num);
		/*
		System.out.println("들어옴??");
		
		for(Loan_FileVO e : list) {
			System.out.println("--------------------");
			System.out.println(e.getLf_num());
			System.out.println(e.getLc_num());
			System.out.println(e.getLf_name());
			System.out.println(e.getLf_oriname());
			System.out.println(e.getLf_sysdate());
			
		}
		*/
		DataSet ds = new DataSet("ar");
		ds.addColumn("lf_num", DataTypes.INT,10);
		ds.addColumn("lc_num", DataTypes.INT,10);
		ds.addColumn("lf_name", DataTypes.STRING,30);
		ds.addColumn("lf_oriname", DataTypes.STRING,20); 
		ds.addColumn("lf_sysdate", DataTypes.STRING,20);
		for(Loan_FileVO e : list) {
			int row = ds.newRow();
			ds.set(row, "lf_num", e.getLf_num());
			ds.set(row, "lc_num", e.getLc_num());
			ds.set(row, "lf_name", e.getLf_name());
			ds.set(row, "lf_oriname",e.getLf_oriname());
			ds.set(row, "lf_sysdate", e.getLf_sysdate());
	  
	  }
		mav.addObject("ds", ds);
		return mav;
		
		}
	
	@RequestMapping(value = "/test")
	public ModelAndView testtest() {
		ModelAndView mav = new ModelAndView("filedown");
		System.out.println("다운!");
		return mav;
	}

	
}
