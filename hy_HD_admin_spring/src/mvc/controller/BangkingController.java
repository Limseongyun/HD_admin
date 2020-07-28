package mvc.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;

import dank.mvc.vo.MemberVO;
import mvc.dao.BangkingDAO;
import mvc.vo.Bangking_viewVO;

@Controller
public class BangkingController {

	@Autowired
	private BangkingDAO bangkingdao;
	@RequestMapping("/getaccount")
	public ModelAndView getac(String ac_num) {
		ModelAndView mav = new ModelAndView("all");
		List<Bangking_viewVO> ac = bangkingdao.getaccount(ac_num);
		DataSet ds = new DataSet("ar");
		ds.addColumn("°èÁÂÄÚµå", DataTypes.INT, 30);
		ds.addColumn("°èÁÂ³×ÀÓ",DataTypes.STRING,100);
		ds.addColumn("°èÁÂ¹øÈ£",DataTypes.STRING,100);
		ds.addColumn("°èÁÂÁÖ",DataTypes.STRING,100);
		ds.addColumn("ÀÜ¾×",DataTypes.STRING,100);
		ds.addColumn("°èÁÂÁÖ¹øÈ£",DataTypes.STRING,100);
		ds.addColumn("°èÁÂÁÖÁ÷¾÷",DataTypes.STRING,100);
		ds.addColumn("°èÁÂÁÖ¼ºº°",DataTypes.STRING,100);
		ds.addColumn("°èÁÂ»ý¼ºÀÏ",DataTypes.STRING,100);
		ds.addColumn("°èÁÂÁ¾·áÀÏ",DataTypes.STRING,100);
		ds.addColumn("¸â¹öÄÚµå",DataTypes.INT,30);
		
		for (Bangking_viewVO e : ac) {
			int row = ds.newRow();
			ds.set(row, "°èÁÂÄÚµå", e.getAc_code());
			ds.set(row, "°èÁÂ³×ÀÓ", e.getAc_name());
			ds.set(row, "°èÁÂ¹øÈ£", e.getAc_num());
			ds.set(row, "°èÁÂÁÖ", e.getMem_name());
			ds.set(row, "ÀÜ¾×", e.getAc_balance());
			ds.set(row, "°èÁÂÁÖ¹øÈ£", e.getMem_phn());
			ds.set(row, "°èÁÂÁÖÁ÷¾÷", e.getMem_job());
			ds.set(row, "°èÁÂÁÖ¼ºº°", e.getMem_gender());
			ds.set(row, "°èÁÂ»ý¼ºÀÏ", e.getAc_start_date());
			ds.set(row, "°èÁÂÁ¾·áÀÏ", e.getAc_end_date());
			ds.set(row,"¸â¹öÄÚµå",e.getMem_code());
		}
		
		mav.addObject("ds", ds);
		return mav;
	}
	
	@RequestMapping(value={ "/deposit" })
	public ModelAndView executedeposit(Bangking_viewVO vo) {
		
		ModelAndView mav = new ModelAndView();

		
		//String money ="10000";
		
	
		
		if(bangkingdao.depcheckac(vo.getAc_num())>=1) {
		Map<String, String> depositparam = new HashMap<String, String>();
		depositparam.put("ac_num", vo.getAc_num());
		depositparam.put("money",vo.getMoney());
		depositparam.put("sp_name", vo.getSp_name());
		depositparam.put("mem_code", String.valueOf(vo.getMem_code()));
		//¿©±â±îÁöÀÛ¾÷ÇÔ20200728
		bangkingservice.depositprocess(money, paramapsp, paramapbal);
		}
		
		
		
		mav.setViewName("redirect:/");
		return mav;
	}
	
	//Ãâ±ÝÇÏ±â(ÀÓ½Ã±â´É)
	@RequestMapping(value={ "/withdraw" })
	public ModelAndView executewithdraw(HttpSession session,String ac_num) {
		//int acnum = Integer.parseInt(ac_num);
		MemberVO sessionmem = (MemberVO) session.getAttribute("member");
		ModelAndView mav = new ModelAndView();
		
		
		String money ="10000";
		
		
		
		if(bangkingdao.witcheckac(ac_num)>=1) {
			Map<String, String> paramckbal = new HashMap<String, String>();
			paramckbal.put("ac_num", ac_num);
			paramckbal.put("mem_code", String.valueOf(sessionmem.getMem_code()));
			if(Long.parseLong(bangkingdao.witcheckbal(paramckbal)) >= Long.parseLong(money)) {
				Map<String, String> paramapsp = new HashMap<String, String>();
				paramapsp.put("ac_num", ac_num);
				paramapsp.put("mem_code", String.valueOf(sessionmem.getMem_code()));
				paramapsp.put("sp_name", "Ãâ±ÝÅ×½ºÆ®¿ë");
				Map<String, String> paramapbal = new HashMap<String, String>();
				paramapbal.put("ac_num", ac_num);
				paramapbal.put("mem_code", String.valueOf(sessionmem.getMem_code()));
				paramapbal.put("wit_money",money);
				bangkingservice.withdrawprocess(money, paramapsp, paramapbal);
			}
			
			
			
		}
		
		
		
		mav.setViewName("redirect:inquire");
		return mav;
	}
}
