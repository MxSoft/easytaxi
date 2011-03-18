/**
 * <p>Copyright ? 2009 BTIT International Group Co. Ltd. </p>
 * <p>Project            :BASE</p>
 * <p>JDK version used  :jdk1.5.0</p>
 * <p>Comments         :���湤�߽ӿ�</p>
 * <p>Version          :2.0</p>
 * <p>Modification history:2009.05.27</p>
 * <p>1.2009.05.27 yuxd new</p>
 **/
package com.btit.support.util;

/**
 * <p>Title: ���湤�߽ӿ� </p>
 * <p>Description: ���湤�߽ӿ�</p>
 * <p>Copyright: Copyright ? 2009</p>
 * <p> Company: BTIT </p>
 * 
 * @author :yuxd
 * @version 2.0
 */
public interface ICacheUtil {
	/**
	 * ���ɻ���ӳ��KEY����
	 * @param tagName
	 * @param object
	 * @return
	 */
	public String getKey(String tagName, Object object);
	/**
	 * �õ������ж�Ӧֵ
	 * @param key
	 * @return
	 */
	public Object get(String key);
	/**
	 * ��key-valueֵ���뻺����
	 * @param key
	 * @param value
	 */
	public void put(String key, Object value);
}
