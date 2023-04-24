package it.jac.corsojava.entity;
import java.time.LocalDateTime;
import java.util.Objects;

public class Social
{
	private long idSocial;
	private String dataTooltip;
	private String media;
	private String link;
	private String img;
	
	private String utenteIns;
	private String utenteMod;
	private LocalDateTime dataIns;
	private LocalDateTime dataMod;
	
	
	public long getIdSocial() {
		return idSocial;
	}


	public String getDataTooltip() {
		return dataTooltip;
	}


	public String getMedia() {
		return media;
	}


	public String getLink() {
		return link;
	}


	public String getImg() {
		return img;
	}


	public String getUtenteIns() {
		return utenteIns;
	}


	public String getUtenteMod() {
		return utenteMod;
	}


	public LocalDateTime getDataIns() {
		return dataIns;
	}


	public LocalDateTime getDataMod() {
		return dataMod;
	}


	public void setIdSocial(long idSocial) {
		this.idSocial = idSocial;
	}


	public void setDataTooltip(String dataTooltip) {
		this.dataTooltip = dataTooltip;
	}


	public void setMedia(String media) {
		this.media = media;
	}


	public void setLink(String link) {
		this.link = link;
	}


	public void setImg(String img) {
		this.img = img;
	}


	public void setUtenteIns(String utenteIns) {
		this.utenteIns = utenteIns;
	}


	public void setUtenteMod(String utenteMod) {
		this.utenteMod = utenteMod;
	}


	public void setDataIns(LocalDateTime dataIns) {
		this.dataIns = dataIns;
	}


	public void setDataMod(LocalDateTime dataMod) {
		this.dataMod = dataMod;
	}
	
	@Override
	public boolean equals(Object obj)
	{
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Social other = (Social) obj;
		return Objects.equals(dataIns, other.dataIns)
				&& Objects.equals(dataMod, other.dataMod)
				&& idSocial == other.idSocial
				&& Objects.equals(dataTooltip, other.dataTooltip)
				&& Objects.equals(media, other.media)
				&& Objects.equals(link, other.link)
				&& Objects.equals(img, other.img)
				&& Objects.equals(utenteIns, other.utenteIns)
				&& Objects.equals(utenteMod, other.utenteMod);
	}

	@Override
	public String toString() {
		return "Social [idSocial=" + idSocial + ", dataTooltip=" + dataTooltip + ", media=" + media + ", link=" + link
				+ ", img=" + img + ", utenteIns=" + utenteIns + ", utenteMod=" + utenteMod + ", dataIns=" + dataIns
				+ ", dataMod=" + dataMod + "]";
	}
}
