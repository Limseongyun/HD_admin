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
		ds.addColumn("�����ڵ�", DataTypes.INT, 30);
		ds.addColumn("���³���",DataTypes.STRING,100);
		ds.addColumn("���¹�ȣ",DataTypes.STRING,100);
		ds.addColumn("������",DataTypes.STRING,100);
		ds.addColumn("�ܾ�",DataTypes.STRING,100);
		ds.addColumn("�����ֹ�ȣ",DataTypes.STRING,100);
		ds.addColumn("����������",DataTypes.STRING,100);
		ds.addColumn("�����ּ���",DataTypes.STRING,100);
		ds.addColumn("���»�����",DataTypes.STRING,100);
		ds.addColumn("����������",DataTypes.STRING,100);
		ds.addColumn("����ڵ�",DataTypes.INT,30);
		
		for (Bangking_viewVO e : ac) {
			int row = ds.newRow();
			ds.set(row, "�����ڵ�", e.getAc_code());
			ds.set(row, "���³���", e.getAc_name());
			ds.set(row, "���¹�ȣ", e.getAc_num());
			ds.set(row, "������", e.getMem_name());
			ds.set(row, "�ܾ�", e.getAc_balance());
			ds.set(row, "�����ֹ�ȣ", e.getMem_phn());
			ds.set(row, "����������", e.getMem_job());
			ds.set(row, "�����ּ���", e.getMem_gender());
			ds.set(row, "���»�����", e.getAc_start_date());
			ds.set(row, "����������", e.getAc_end_date());
			ds.set(row,"����ڵ�",e.getMem_code());
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
		//��������۾���20200728
		bangkingservice.depositprocess(money, paramapsp, paramapbal);
		}
		
		
		
		mav.setViewName("redirect:/");
		return mav;
	}
	
	//����ϱ�(�ӽñ��)
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
				paramapsp.put("sp_name", "����׽�Ʈ��");
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
